import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserCredentials } from "../../../chunks/UserCredentials.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``} <form method="POST" action="?/login">${validate_component(UserCredentials, "UserCredentials").$$render($$result, {}, {}, {})} <button class="button is-success is-fullwidth" data-svelte-h="svelte-1klwqp6">Log In</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight"><div class="hero-body"><div class="container"><div class="column is-4 is-offset-4"><h3 class="title has-text-black has-text-centered" data-svelte-h="svelte-oml9sy">Login to Rustic Ramblers</h3> <div class="box">${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div></div></section>`;
});
export {
  Page as default
};
