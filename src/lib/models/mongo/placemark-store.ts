import type { Placemark } from "$lib/types/placemark-types.js";
import { PlacemarkMongoose } from "./placemark.js";

export const placemarkStore = {
  async find(): Promise<Placemark[]> {
    const placemarks = await PlacemarkMongoose.find().populate("member").populate("trektype").lean();
    return placemarks.map((placemark) => {
      const { poi, level, member, trektype, lat, lng } = placemark;
      return {
        poi,
        level,
        member,
        trektype,
        lat,
        lng
      };
    });
  },

  async findBy(id: string): Promise<Placemark | null> {
    const placemark = await PlacemarkMongoose.findOne({ trektype: id });
    if (!placemark) {
      return null;
    }
    return placemark;
  },

  async add(placemark: Placemark): Promise<Placemark | null> {
    const newPlacemark = new PlacemarkMongoose({ ...placemark });
    await newPlacemark.save();
    return newPlacemark;
  },

  async delete() {
    await PlacemarkMongoose.deleteMany({});
  }
};
