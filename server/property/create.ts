"use server";

import Property from "@/models/Property";
import {
  __PropertySchema,
  __UpdatePropertySchema,
} from "@/schema/property.schema";
import database from "@/services/database";
import Validator from "@/lib/validator";
import { upload } from "@/lib/upload";
import _ from "lodash";
import { random } from "@/lib/string";
import { status } from "@/lib/status";

export async function createProperty(state: any, data: FormData) {
  await database();
  const galleryFiles = data.getAll("gallery");
  const image = data.get("image");
  const property_id = data.get("property_id");

  const body = Object.fromEntries(data.entries()) as unknown as any;
  const property = property_id ? await Property.findById(property_id) : null;

  const validator = new Validator(
    body,
    property ? __UpdatePropertySchema.rules : __PropertySchema.rules
  );
  validator.setAttributeNames(
    __PropertySchema.attributes as Validator.AttributeNames
  );

  if (!validator.check()) {
    return { status: false, ...validator.errors };
  }

  let uploadedImages: any[] = [];
  let featuredImage = null;

  if (property) {
    uploadedImages =
      galleryFiles.length > 0
        ? await Promise.all(
            galleryFiles.map((file) => upload(file, "properties/" + random()))
          )
        : property.gallery;
    featuredImage = image
      ? await upload(image, "properties/" + random())
      : property.image;
  } else {
    uploadedImages = await Promise.all(
      galleryFiles.map((file) => upload(file, "properties/" + random()))
    );
    featuredImage = await upload(image, "properties/" + random());
  }

  body.status = body.status == status.active;

  property
    ? await Property.findByIdAndUpdate(property_id, {
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
      })
    : await Property.create({
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
        available_units: body.units,
      });

  return { status: true, message: "Property Updated Successfully!" };
}
