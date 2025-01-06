"use server";

import response from "@/lib/response";
import { random } from "@/lib/string";
import { upload } from "@/lib/upload";
import { getFormDataAsJson } from "@/lib/utils";
import Validator from "@/lib/validator";
import User from "@/models/User";
import {
  __UpdatePasswordSchema,
  __UpdateProfileSchema,
  __UpdateUserBankSchema,
} from "@/schema/user.schema";
import { authUser } from "@/services/auth";
import bcrypt from "bcryptjs";

export async function updateProfile(state: any, formData: FormData) {
  const body = Object.fromEntries(formData.entries());
  const user = state.user ?? (await authUser());

  const validator = new Validator(body, __UpdateProfileSchema.rules);
  validator.setAttributeNames(
    __UpdateProfileSchema.attributes as Validator.AttributeNames
  );

  if (!validator.check()) return response.error().json(validator.errors);

  const avatar = formData.get("avatar");
  const image = await upload(avatar, "users", random());
  await User.findByIdAndUpdate(user.id, {
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    avatar: image ?? user.image,
  });

  const updatedUser = await User.findById(user.id);

  const res = {
    user: JSON.parse(JSON.stringify(updatedUser)),
  };
  return response.success().json("Profile Updated Successfully!", res);
}

export async function updatePassword(state: any, formData: FormData) {
  const body = getFormDataAsJson(formData);
  const user = await authUser(true);

  const validator = new Validator(body, __UpdatePasswordSchema.rules);
  validator.setAttributeNames(
    __UpdatePasswordSchema.attributes as Validator.AttributeNames
  );

  if (!validator.check()) return response.error().json(validator.errors);

  if (!bcrypt.compareSync(body.old_password as string, user.password)) {
    return response.error().json({ password: "The Password is incorrect" });
  }

  const salt = bcrypt.genSaltSync(10);
  const new_password = bcrypt.hashSync(body.new_password, salt);

  await User.findByIdAndUpdate(user.id, {
    password: new_password,
  });

  return response.success().json("Password Updated Successfully!");
}

export async function updateBank(state: any, formData: FormData) {
  const body = getFormDataAsJson(formData);
  const user = state.user ?? (await authUser());

  const validator = new Validator(body, __UpdateUserBankSchema.rules);
  validator.setAttributeNames(
    __UpdateUserBankSchema.attributes as Validator.AttributeNames
  );

  if (!validator.check()) return response.error().json(validator.errors);

  await User.findByIdAndUpdate(user.id, {
    bank: body,
  });

  // TODO: find out why app runs into max call stack error when database read is not stringified and parsed
  const updatedUser = await User.findById(user.id);

  return response.success().json("Bank Information Updated Successfully!", {
    user: JSON.parse(JSON.stringify(updatedUser)),
  });
}
