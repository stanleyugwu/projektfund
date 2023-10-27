import mongoose from "mongoose";

export class Actions extends mongoose.SchemaType {
  constructor(key: string, options: mongoose.AnyObject | undefined) {
    super(key, options, "Int8");
  }

  cast(val: string) {
    const actions = ["email-verification", "payment", "deposit"];
    if (actions.includes(val)) return val;
    throw new Error("Invalid App Action Set!");
  }
}

