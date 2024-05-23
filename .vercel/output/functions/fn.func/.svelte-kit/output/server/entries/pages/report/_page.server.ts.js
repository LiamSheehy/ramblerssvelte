import { p as placemarkService } from "../../../chunks/placemark-service.js";
const load = async () => {
  return {
    placemarks: await placemarkService.getPlacemarks()
  };
};
export {
  load
};
