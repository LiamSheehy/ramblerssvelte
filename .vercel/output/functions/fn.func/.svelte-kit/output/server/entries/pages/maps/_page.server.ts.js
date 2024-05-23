import { p as placemarkService } from "../../../chunks/placemark-service.js";
const load = async () => {
  const [placemarks, trektypes] = await Promise.all([
    placemarkService.getPlacemarks(),
    placemarkService.getTrektypes()
  ]);
  return {
    placemarks,
    trektypes
  };
};
export {
  load
};
