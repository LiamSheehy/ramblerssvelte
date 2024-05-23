import { placemarkService } from "$lib/services/placemark-service";
import { generateByTrektype, generateByLevel } from "$lib/services/placemark-utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const placemarks = await placemarkService.getPlacemarks();
  const trektypes = await placemarkService.getTrektypes();
  return {
    byLevel: generateByLevel(placemarks),
    byTrektype: generateByTrektype(placemarks, trektypes)
  };
};