import { c as create_ssr_component, b as each, e as escape, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
import "devalue";
import "../../../chunks/client.js";
const PlacemarkList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemarks } = $$props;
  if ($$props.placemarks === void 0 && $$bindings.placemarks && placemarks !== void 0)
    $$bindings.placemarks(placemarks);
  return `<table class="table is-fullwidth"><thead data-svelte-h="svelte-k44123"><th>Trektype</th> <th>POI</th> <th>Level</th> <th>Added by</th></thead> <tbody>${each(placemarks, (placemark) => {
    return `<tr><td>${typeof placemark.trektype !== "string" ? `${escape(placemark.trektype.title)}` : ``}</td> <td>${escape(placemark.poi)}</td> <td>${escape(placemark.level)}</td> <td>${typeof placemark.member !== "string" ? `${escape(placemark.member.lastName)}, ${escape(placemark.member.firstName)}` : `${escape(placemark.member)}`}</td> </tr>`;
  })}</tbody></table>`;
});
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lat = 0 } = $$props;
  let { lng = 0 } = $$props;
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  return `<div class="box field is-horizontal"><div class="field-label is-normal" data-svelte-h="svelte-a1jkre"><label for="lat" class="label">Lat</label></div> <div class="field-body"><div class="field"><p class="control is-expanded"><input id="lat" class="input" type="number" name="lat" step="any"${add_attribute("value", lat, 0)}></p></div> <div class="field-label is-normal" data-svelte-h="svelte-18bhoyi"><label for="lng" class="label">Lng</label></div> <div class="field"><p class="control is-expanded"><input id="lng" class="input" type="number" name="lng" step="any"${add_attribute("value", lng, 0)}></p></div></div></div>`;
});
let message = "Build the Journey";
const TrailsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { trektypeList = [] } = $$props;
  let lat = 52.160858;
  let lng = -7.15242;
  let difficultyLevel = ["beginner", "intermediate", "expert"];
  if ($$props.trektypeList === void 0 && $$bindings.trektypeList && trektypeList !== void 0)
    $$bindings.trektypeList(trektypeList);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form method="POST" action="?/trails"><div class="field" data-svelte-h="svelte-1n0vphb"><label class="label" for="poi">Enter Trail:</label> <input class="input" id="poi" name="poi" type="string"></div> <div class="field"><div class="control"><label class="label" for="poi" data-svelte-h="svelte-1fswki9">Select Level of experience required:</label> ${each(difficultyLevel, (level) => {
      return `<input class="radio" type="radio"${add_attribute("value", level, 0)} name="level"> ${escape(level)}`;
    })}</div></div> <div class="field"><label class="label" for="poi" data-svelte-h="svelte-gkh9sh">Select Trektype:</label> <div class="select"><select name="trektype">${each(trektypeList, (trektype) => {
      return `<option${add_attribute("value", trektype._id, 0)}>${escape(trektype.title)}</option>`;
    })}</select></div></div> ${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { lat, lng },
      {
        lat: ($$value) => {
          lat = $$value;
          $$settled = false;
        },
        lng: ($$value) => {
          lng = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="field" data-svelte-h="svelte-tte50g"><div class="control"><button class="button is-success is-fullwidth">Please Add a Trail</button></div></div></form> <div class="box mt-4"><div class="content has-text-centered">${escape(message)}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  subTitle.set("Placemarks to Date");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="columns"><div class="column">${validate_component(Card, "Card").$$render($$result, { title: "Placemarks" }, {}, {
    default: () => {
      return `${validate_component(PlacemarkList, "PlacemarkListFull").$$render($$result, { placemarks: data.placemarks }, {}, {})}`;
    }
  })}</div> <div class="column">${validate_component(Card, "Card").$$render($$result, { title: "Placemarks" }, {}, {
    default: () => {
      return `${validate_component(TrailsForm, "TrailsForm").$$render($$result, { trektypeList: data.trektypes }, {}, {})}`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
