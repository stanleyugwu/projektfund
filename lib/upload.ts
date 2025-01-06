import { writeFile } from "fs";
import { join } from "path";
import { v2 as cloudinary } from "cloudinary";

// TODO: rewrite function to be more efficient
// add ability for batch upload and a way to detect property that has the image so to allow auto deleting image
// when property is deleted

export async function upload(
  file: any,
  path: string, // e.g properties
  uniqueId: string, // e.g abcded123
  isPublic: boolean = true
) {
  if (!file) return null;
  let ext = file.name.split(".").pop();
  if (!ext) return null;
  ext = ext.toLowerCase();

  const pathAndId = join(path, uniqueId); // e.g properties/abcdef
  const publicPath = pathAndId + "." + ext; // e.g properties/abcdef.jpg

  const bytes = await file.arrayBuffer();
  const fileBuffer = Buffer.from(bytes);

  if (process.env.NODE_ENV === "development") {
    const filePath = join(isPublic ? "public" : "storage", pathAndId);
    const storagePath = filePath + "." + ext; // e.g storage/properties/abcdef.jpg or public/properties/abcdef.jpg

    writeFile(storagePath, fileBuffer, (err) => {
      console.log(err);
    });

    return isPublic ? publicPath : storagePath;
  } else {
    // Config cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const base64Img = fileBuffer.toString("base64");

    const uploadResult = await cloudinary.uploader
      .upload(`data:${file.type};base64,${base64Img}`, {
        public_id: uniqueId,
        asset_folder: path,
        use_asset_folder_as_public_id_prefix: true,
        format: ext,
        resource_type: "image",
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });

    return uploadResult.public_id + "." + ext;
  }
}
