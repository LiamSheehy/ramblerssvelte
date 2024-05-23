import { p as placemarkService } from "../../../chunks/placemark-service.js";
function generateByLevel(placemarkList) {
  const totalByLevel = {
    labels: ["beginner", "intermediate", "expert"],
    datasets: [
      {
        values: [0, 0, 0]
      }
    ]
  };
  placemarkList.forEach((placemark) => {
    if (placemark.level === "beginner") {
      totalByLevel.datasets[0].values[0] += 1;
    } else if (placemark.level === "intermediate") {
      totalByLevel.datasets[0].values[1] += 1;
    } else if (placemark.level === "expert") {
      totalByLevel.datasets[0].values[2] += 1;
    }
  });
  return totalByLevel;
}
function generateByTrektype(placemarkList, trektypes) {
  const placemarksByTrektype = {
    labels: trektypes.map((trektype) => trektype.title),
    datasets: [
      {
        values: trektypes.map(() => 0)
      }
    ]
  };
  placemarkList.forEach((placemark) => {
    const trektypeId = typeof placemark.trektype === "string" ? placemark.trektype : placemark.trektype._id;
    const index = trektypes.findIndex((trektype) => trektype._id === trektypeId);
    if (index !== -1) {
      placemarksByTrektype.datasets[0].values[index] += 1;
    }
  });
  return placemarksByTrektype;
}
const load = async () => {
  const placemarks = await placemarkService.getPlacemarks();
  const trektypes = await placemarkService.getTrektypes();
  return {
    byLevel: generateByLevel(placemarks),
    byTrektype: generateByTrektype(placemarks, trektypes)
  };
};
export {
  load
};
