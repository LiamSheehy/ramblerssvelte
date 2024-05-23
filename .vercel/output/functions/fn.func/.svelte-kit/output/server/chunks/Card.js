import { c as create_ssr_component, e as escape } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="card mb-5"><header class="card-header"><p class="card-header-title"><span class="icon" data-svelte-h="svelte-1vlug7a"><i class="fas fa-hiking" style="color: #3f836e;"></i></span><span>${escape(title)}</span></p></header> <div class="card-content"><div class="content">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
export {
  Card as C
};
