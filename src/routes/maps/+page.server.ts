import { placemarkService } from "$lib/services/placemark-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const [placemarks, trektypes] = await Promise.all([
    placemarkService.getPlacemarks(),
    placemarkService.getTrektypes()
  ]);

  return {
    placemarks,
    trektypes
  };
};
