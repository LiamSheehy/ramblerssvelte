import type { User } from "$lib/types/placemark-types.js";
import { UserMongoose } from "./user.js";

export const userStore = {
  async find(): Promise<User[]> {
    const users = await UserMongoose.find().lean().exec();
    return users as User[];
  },

  async findOne(id: string): Promise<User | null> {
    if (id) {
      const user = await UserMongoose.findOne({ _id: id }).lean().exec();
      return user as User | null;
    }
    return null;
  },

  async add(user: User): Promise<User | null> {
    const newUser = new UserMongoose(user);
    const userObj = await newUser.save();
    return userObj as User;
  },

  async findBy(email: string): Promise<User | null> {
    const user = await UserMongoose.findOne({ email }).lean().exec();
    return user as User | null;
  },

  async deleteOne(id: string): Promise<void> {
    try {
      await UserMongoose.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async delete(): Promise<void> {
    await UserMongoose.deleteMany({});
  }
};
