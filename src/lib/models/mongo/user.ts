import type { User } from "$lib/types/placemark-types";
import { Schema, model } from "mongoose";
import pkg from "mongoose";
const { models } = pkg;

const userSchema = new Schema<User>({
  firstName: { type: Schema.Types.String, required: true },
  lastName: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true }
});

export const UserMongoose = models["User"] || model("User", userSchema);
