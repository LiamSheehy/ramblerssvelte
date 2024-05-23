// src/lib/services/placemark-service.ts
import bcrypt from 'bcrypt';
import { userStore } from '$lib/models/mongo/user-store';
import type { Session, User } from "$lib/types/placemark-types";
import type { Trektype, Placemark } from "$lib/types/placemark-types";
import { placemarkStore } from "$lib/models/mongo/placemark-store";
import { trektypeStore } from "$lib/models/mongo/trektype-store";

export const placemarkService = {
  async signup(user: User): Promise<boolean> {
    try {
      const newUser = await userStore.add(user);
      return !!newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const user = await userStore.findBy(email);
      if (user !== null && await bcrypt.compare(password, user.password)) {
        const session = {
          name: `${user.firstName} ${user.lastName}`,
          token: user._id!.toString(),
          _id: user._id!.toString()
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async trails(placemark: Placemark) {
    try {
      placemarkStore.add(placemark);
    } catch (error) {
      return false;
    }
  },

  async getTrektypes(): Promise<Trektype[]> {
    try {
      const trektypes = await trektypeStore.find();
      return JSON.parse(JSON.stringify(trektypes));
    } catch (error) {
      return [];
    }
  },

  async getPlacemarks(): Promise<Placemark[]> {
    try {
      const placemarks = await placemarkStore.find();
      return JSON.parse(JSON.stringify(placemarks));
    } catch (error) {
      return [];
    }
  }
};
