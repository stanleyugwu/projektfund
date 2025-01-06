"use server";

import response from "@/lib/response";
import { status } from "@/lib/status";
import { getFormDataAsJson } from "@/lib/utils";
import ListedUnit from "@/models/ListedUnit";
import Property from "@/models/Property";
import Unit from "@/models/Unit";
import User from "@/models/User";
import { authUser } from "@/services/auth";
import database from "@/services/database";
import { IUnit } from "@/types/units";
import { __ListUnitSchema } from "@/schema/unit.schema";
import { property } from "lodash";
import Validator from "@/lib/validator";

export async function userPortfolio(query?: string) {
  await database();
  const user = await authUser();
  let data;

  if (query?.trim()) {
    const searchRegex = new RegExp(query, "i");
    data = await Unit.find({
      user: user.id,
      $or: [
        { name: { $regex: searchRegex } },
        { description: { $regex: searchRegex } },
        { address: { $regex: searchRegex } },
      ],
    }).populate("property user listing");
  } else {
    data = await Unit.find({ user: user.id }).populate("property user listing");
  }

  return JSON.parse(JSON.stringify(data));
}

export async function listUnits(state: any, formData: FormData) {
  await database();

  const body = getFormDataAsJson(formData);
  const user = await authUser();

  const validator = new Validator(body, __ListUnitSchema.rules);
  validator.setAttributeNames(
    __ListUnitSchema.attributes as Validator.AttributeNames
  );

  // Validate Data
  if (!validator.check()) {
    return { status: false, ...validator.errors };
  }

  const unit = await Unit.findById(body.unit_id).populate(
    "property listing user"
  );
  // const available_units = unit.units - unit.listed_units;

  if (unit.available_units < body.units)
    return response
      .error()
      .json({ errors: { units: "You do not have enough slots to proceed!" } });

  await ListedUnit.create({
    user: user.id,
    unit: unit.id,
    property: unit.property.id,
    unit_price: body.unit_price,
    units: body.units,
    status: status.active,
    available_units: body.units,
  });

  unit.listed_units += parseInt(body.units); // it's important we parse this cus body.unit is string and in js 1+'1' == '11' not 2
  unit.available_units -= body.units;
  await unit.save();

  return response.success().json({
    message: `You have successfuly listed ${body.units} slot for sale`,
  });
}

export async function saleOffers(unit_id: string) {
  const user = await authUser();
  const units = await ListedUnit.find({
    unit: unit_id,
    user: {
      $ne: user.id,
    },
  }).populate("unit property user");
  return JSON.parse(JSON.stringify(units));
}

export async function removeSaleOffer(listing_id: string) {
  const saleOffer = await ListedUnit.findById(listing_id);
  if (!saleOffer)
    return response.error().json({ message: `The sale offer does not exist` });
  const user = await authUser();

  if (saleOffer.user !== user.id)
    return response
      .error()
      .json({ message: `You are not authorized to carry out this action.` });

  await ListedUnit.findByIdAndDelete(listing_id);
  return response
    .success()
    .json({ message: `Sale offer removed successfully!` });
}

export async function deleteUnit(unit_id: string) {
  const unit = await Unit.findById(unit_id).populate("property user");
  await handleDelete(unit);
  return response
    .success()
    .json("You have successfully delete the purchased slot.");
}

async function handleDelete(unit: IUnit) {
  await Property.findByIdAndUpdate(unit.property._id, {
    available_units:
      unit.property.available_units +
      (unit.available_units + unit.listed_units),
  });

  await ListedUnit.deleteMany({
    unit: unit._id,
  });

  await Unit.findByIdAndDelete(unit._id);
}

export async function deleteUnitAndRefund(unit_id: string) {
  const unit = await Unit.findById(unit_id).populate("property user");
  const user = unit.user;
  const total_sellable_units = unit.available_units + unit.listed_units;
  const refund_amount = total_sellable_units * unit.property.unit_price;

  // Delete the unit
  await handleDelete(unit);

  // Refund the user
  user.main_bal += refund_amount;
  await user.save();

  return response
    .success()
    .json(
      `You have successfully deleted the purchased unit and refunded ${refund_amount.toLocaleString()} Naira to the user based on the current property value`
    );
}
