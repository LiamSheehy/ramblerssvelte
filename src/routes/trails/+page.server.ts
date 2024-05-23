import { placemarkService } from "$lib/services/placemark-service";
import type { Session } from "$lib/types/placemark-types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    placemarks: await placemarkService.getPlacemarks(),
    trektypes: await placemarkService.getTrektypes()
  };
};

export const actions = {
  trails: async ({ request, cookies }) => {
    const cookieStr = cookies.get("placemark-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const placemark = {
          poi: form.get("poi") as string,
          level: form.get("level") as string,
          trektype: form.get("trektype") as string,
          lat: form.get("lat") as unknown as number,
          lng: form.get("lng") as unknown as number,
          member: session._id
        };
        placemarkService.trails(placemark);
      }
    }
  }
};