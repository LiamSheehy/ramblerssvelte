import type { Placemark } from "$lib/types/placemark-types";
import { Schema, model } from "mongoose";

import pkg from "mongoose";
const { models } = pkg;

const placemarkSchema = new Schema<Placemark>({
  poi: String,
  level: String,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment

  member: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment

  trektype: {
    type: Schema.Types.ObjectId,
    ref: "Trektype"
  },
  lat: String,
  lng: String
});

export const PlacemarkMongoose = models["Placemark"] || model("Placemark", placemarkSchema);