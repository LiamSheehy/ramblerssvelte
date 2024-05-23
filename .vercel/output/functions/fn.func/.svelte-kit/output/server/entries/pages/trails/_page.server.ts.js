import { p as placemarkService } from "../../../chunks/placemark-service.js";
const load = async () => {
  return {
    placemarks: await placemarkService.getPlacemarks(),
    trektypes: await placemarkService.getTrektypes()
  };
};
const actions = {
  trails: async ({ request, cookies }) => {
    const cookieStr = cookies.get("placemark-user");
    if (cookieStr) {
      const session = JSON.parse(cookieStr);
      if (session) {
        const form = await request.formData();
        const placemark = {
          poi: form.get("poi"),
          level: form.get("level"),
          trektype: form.get("trektype"),
          lat: form.get("lat"),
          lng: form.get("lng"),
          member: session._id
        };
        placemarkService.trails(placemark);
      }
    }
  }
};
export {
  actions,
  load
};
