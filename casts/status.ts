import { IStatus } from "@/types/status";
import mongoose from "mongoose";

export class Status extends mongoose.SchemaType {
  constructor(key: string, options: mongoose.AnyObject | undefined) {
    super(key, options, "Int8");
  }

  cast(val: string) {
    const actions = ["SUCCESS", "COMPLETED", "FAILED"];
    if (actions.includes(val)) return val;
    throw new Error("Invalid App Action Set!");
  }
}

