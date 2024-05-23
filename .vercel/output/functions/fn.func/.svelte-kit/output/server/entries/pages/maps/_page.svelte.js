import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "home-map-id" } = $$props;
  let { height = 80 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 8 } = $$props;
  let { minZoom = 7 } = $$props;
  let { activeLayer = "Terrain" } = $$props;
  let { trektypes = [] } = $$props;
  let { placemarks = [] } = $$props;
  let imap;
  let overlays = {};
  function updateMarkers(selectedTrektypeId) {
    if (selectedTrektypeId === "all") {
      Object.values(overlays).forEach((overlay) => overlay.addTo(imap));
    } else {
      Object.keys(overlays).forEach((trektypeId) => {
        const overlay = overlays[trektypeId];
        if (trektypeId === selectedTrektypeId) {
          overlay.addTo(imap);
        } else {
          overlay.remove();
        }
      });
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.activeLayer === void 0 && $$bindings.activeLayer && activeLayer !== void 0)
    $$bindings.activeLayer(activeLayer);
  if ($$props.trektypes === void 0 && $$bindings.trektypes && trektypes !== void 0)
    $$bindings.trektypes(trektypes);
  if ($$props.placemarks === void 0 && $$bindings.placemarks && placemarks !== void 0)
    $$bindings.placemarks(placemarks);
  if ($$props.updateMarkers === void 0 && $$bindings.updateMarkers && updateMarkers !== void 0)
    $$bindings.updateMarkers(updateMarkers);
  return `<div${add_attribute("id", id, 0)} class="box" style="${"height: " + escape(height, true) + "vh"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let map;
  subTitle.set("Placemarks Locations");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, { title: "Placemarks Locations" }, {}, {
      default: () => {
        return `<select><option value="all" data-svelte-h="svelte-1cfngc1">All Trektypes</option>${each(data.trektypes, (trektype) => {
          return `<option${add_attribute("value", trektype._id, 0)}>${escape(trektype.title)}</option>`;
        })}</select> ${validate_component(LeafletMap, "LeafletMap").$$render(
          $$result,
          { height: 60, this: map },
          {
            this: ($$value) => {
              map = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
