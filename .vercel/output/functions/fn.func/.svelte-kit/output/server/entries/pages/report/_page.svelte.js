import { c as create_ssr_component, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
const PlacemarkListGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemarks } = $$props;
  let placemarksByTrektype = {};
  placemarks.forEach((placemark) => {
    let trektypeTitle = typeof placemark.trektype !== "string" ? placemark.trektype.title : "Unknown";
    if (!placemarksByTrektype[trektypeTitle]) {
      placemarksByTrektype[trektypeTitle] = [];
    }
    placemarksByTrektype[trektypeTitle].push(placemark);
  });
  if ($$props.placemarks === void 0 && $$bindings.placemarks && placemarks !== void 0)
    $$bindings.placemarks(placemarks);
  return `${each(Object.keys(placemarksByTrektype), (trektypeTitle) => {
    return `<div class="box"><h2 class="title is-4">${escape(trektypeTitle)}</h2> <table class="table is-fullwidth is-striped is-hoverable"><thead data-svelte-h="svelte-vjmzbm"><tr><th class="is-narrow">POI</th> <th class="is-narrow">Level</th> <th class="is-narrow">Added by</th> </tr></thead> <tbody>${each(placemarksByTrektype[trektypeTitle], (placemark) => {
      return `<tr><td>${escape(placemark.poi)}</td> <td>${escape(placemark.level)}</td> <td>${typeof placemark.member !== "string" ? `${escape(placemark.member.lastName)}, ${escape(placemark.member.firstName)}` : `${escape(placemark.member)}`}</td> </tr>`;
    })} </tbody></table> </div>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  subTitle.set("List of current treks");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Card, "Card").$$render($$result, { title: "Placemarks" }, {}, {
    default: () => {
      return `${validate_component(PlacemarkListGroup, "PlacemarkList").$$render($$result, { placemarks: data.placemarks }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
