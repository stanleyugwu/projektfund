"use server";

import Property from "@/models/Property";
import { __PropertySchema } from "@/schema/property.schema";
import database from "@/services/database";
import { IProperty } from "@/types/property";
import Validator from "@/lib/validator";
import { upload } from "@/lib/upload";
import _ from "lodash";
import { random } from "@/lib/string";
import Listing from "@/models/Listing";
import {
  __ListingSchema,
  __UpdateListingSchema,
} from "@/schema/listing.schema";

export async function createListing(state: any, data: FormData) {
  await database();

  const galleryFiles = data.getAll("gallery");
  const image = data.get("image");
  const listing_id = data.get("listing_id");

  const body = Object.fromEntries(data.entries()) as unknown as any;
  const listing = listing_id ? await Listing.findById(listing_id) : null;

  const validator = new Validator(
    body,
    listing ? __UpdateListingSchema.rules : __ListingSchema.rules
  );

  if (!validator.check()) {
    return { status: false, ...validator.errors };
  }

  let uploadedImages: any[] = [];
  let featuredImage = null;

  if (listing) {
    uploadedImages =
      galleryFiles.length > 0
        ? await Promise.all(
            galleryFiles.map((file) => upload(file, "listings", random()))
          )
        : listing.gallery;
    featuredImage = image
      ? await upload(image, "listings", random())
      : listing.image;
  } else {
    featuredImage = await upload(image, "listings", random());
    uploadedImages = await Promise.all(
      galleryFiles.map((file) => upload(file, "listings", random()))
    );
  }

  listing
    ? await Listing.findByIdAndUpdate(listing_id, {
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
        status: body.status == "active",
      })
    : await Listing.create({
        ...body,
        gallery: uploadedImages,
        image: featuredImage,
        status: body.status == "active",
      });

  return { status: true, message: "Listing Created Successfully!" };
}
