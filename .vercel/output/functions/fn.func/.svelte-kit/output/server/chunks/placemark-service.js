import mongoose, { Schema, model } from "mongoose";
const { models: models$2 } = mongoose;
const userSchema = new Schema({
  firstName: { type: Schema.Types.String, required: true },
  lastName: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true }
});
const UserMongoose = models$2["User"] || model("User", userSchema);
const userStore = {
  async find() {
    const users = await UserMongoose.find().lean().exec();
    return users;
  },
  async findOne(id) {
    if (id) {
      const user = await UserMongoose.findOne({ _id: id }).lean().exec();
      return user;
    }
    return null;
  },
  async add(user) {
    const newUser = new UserMongoose(user);
    const userObj = await newUser.save();
    return userObj;
  },
  async findBy(email) {
    const user = await UserMongoose.findOne({ email }).lean().exec();
    return user;
  },
  async deleteOne(id) {
    try {
      await UserMongoose.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },
  async delete() {
    await UserMongoose.deleteMany({});
  }
};
const { models: models$1 } = mongoose;
const placemarkSchema = new Schema({
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
const PlacemarkMongoose = models$1["Placemark"] || model("Placemark", placemarkSchema);
const placemarkStore = {
  async find() {
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
  async findBy(id) {
    const placemark = await PlacemarkMongoose.findOne({ trektype: id });
    if (!placemark) {
      return null;
    }
    return placemark;
  },
  async add(placemark) {
    const newPlacemark = new PlacemarkMongoose({ ...placemark });
    await newPlacemark.save();
    return newPlacemark;
  },
  async delete() {
    await PlacemarkMongoose.deleteMany({});
  }
};
const { models } = mongoose;
const trektypeSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true
  }
});
const TrektypeMongoose = models["Trektype"] || model("Trektype", trektypeSchema);
const trektypeStore = {
  async find() {
    const trektypes = await TrektypeMongoose.find().lean().exec();
    return trektypes;
  },
  async findOne(id) {
    const trektype = await TrektypeMongoose.findOne({ _id: id }).lean().exec();
    return trektype;
  },
  async findBy(title) {
    const trektype = await TrektypeMongoose.findOne({ title }).lean().exec();
    return trektype;
  }
};
const placemarkService = {
  async signup(user) {
    try {
      const newUser = await userStore.add(user);
      return !!newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async login(email, password) {
    try {
      const user = await userStore.findBy(email);
      if (user !== null && user.password === password) {
        const session = {
          name: `${user.firstName} ${user.lastName}`,
          token: user._id.toString(),
          _id: user._id.toString()
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async trails(placemark) {
    try {
      placemarkStore.add(placemark);
    } catch (error) {
      return false;
    }
  },
  async getTrektypes() {
    try {
      const trektypes = await trektypeStore.find();
      return JSON.parse(JSON.stringify(trektypes));
    } catch (error) {
      return [];
    }
  },
  async getPlacemarks() {
    try {
      const placemarks = await placemarkStore.find();
      return JSON.parse(JSON.stringify(placemarks));
    } catch (error) {
      return [];
    }
  }
};
export {
  placemarkService as p
};
