import { a as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as subTitle, c as currentSession } from "../../chunks/stores.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $subTitle, $$unsubscribe_subTitle;
  $$unsubscribe_subTitle = subscribe(subTitle, (value) => $subTitle = value);
  $$unsubscribe_subTitle();
  return `<section class="hero is-primary is-small mt-6 mb-6"><div class="hero-body"><div class="container"><h1 class="title has-text-centered">${escape($subTitle)}</h1></div></div></section>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  $$unsubscribe_currentSession();
  return `<nav class="navbar is-full-width"><div class="container"><div class="navbar-brand" data-svelte-h="svelte-1vfmkpv"> <span class="brand-logo"><img src="/rusticramblerslogo1.png" alt="Rustic Ramblers Image" style="width: 200px; height: 120px;" class="mr-9"></span></div> <div id="navbarMenu" class="navbar-menu"><div class="navbar-end"><a class="navbar-item has-text-primary-bold" href="/trails" style="font-size: 20px; font-weight: bold;" data-svelte-h="svelte-16aowar">Add Trail</a> <a class="navbar-item has-text-primary-bold" href="/report" style="font-size: 20px; font-weight: bold;" data-svelte-h="svelte-17o48vp">Trek List</a> <a class="navbar-item has-text-primary-bold" href="/charts" style="font-size: 20px; font-weight: bold;" data-svelte-h="svelte-lhxxrp">Charts</a> <a class="navbar-item has-text-primary-bold" href="/maps" style="font-size: 20px; font-weight: bold;" data-svelte-h="svelte-eesuxd">Maps</a> <a class="navbar-item has-text-primary-bold" href="/about" style="font-size: 20px; font-weight: bold;" data-svelte-h="svelte-15bc7jf">About</a> <a data-sveltekit-preload-data="tap" class="navbar-item has-text-danger-40" href="/logout">Logout [${escape($currentSession?.name)}]</a></div> <div></div></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSession, $$unsubscribe_currentSession;
  $$unsubscribe_currentSession = subscribe(currentSession, (value) => $currentSession = value);
  let { data } = $$props;
  if (data.session) {
    currentSession.set(data.session);
  } else {
    currentSession.set({ name: "", _id: "", token: "" });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_currentSession();
  return `<div class="container">${$currentSession.token ? `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
