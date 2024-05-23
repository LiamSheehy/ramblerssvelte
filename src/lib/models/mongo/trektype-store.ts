import type { Trektype } from "$lib/types/placemark-types";
import { TrektypeMongoose } from "./trektype";

export const trektypeStore = {
  async find(): Promise<Trektype[]> {
    const trektypes = await TrektypeMongoose.find().lean().exec();
    return trektypes as Trektype[];
  },

  async findOne(id: string): Promise<Trektype | null> {
    const trektype = await TrektypeMongoose.findOne({ _id: id }).lean().exec();
    return trektype as Trektype | null;
  },

  async findBy(title: string): Promise<Trektype | null> {
    const trektype = await TrektypeMongoose.findOne({ title }).lean().exec();
    return trektype as Trektype | null;
  }
};
