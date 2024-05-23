import type { Trektype } from "$lib/types/placemark-types";
import { Schema, model } from "mongoose";
import pkg from "mongoose";
const { models } = pkg;

const trektypeSchema = new Schema<Trektype>({
  title: {
    type: Schema.Types.String,
    required: true,
  },
});

export const TrektypeMongoose = models["Trektype"] || model("Trektype", trektypeSchema);
