import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { U as UserCredentials } from "../../../chunks/UserCredentials.js";
const UserDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { firstName = "" } = $$props;
  let { lastName = "" } = $$props;
  if ($$props.firstName === void 0 && $$bindings.firstName && firstName !== void 0)
    $$bindings.firstName(firstName);
  if ($$props.lastName === void 0 && $$bindings.lastName && lastName !== void 0)
    $$bindings.lastName(lastName);
  return ` <label class="label" data-svelte-h="svelte-1xxpr66">Name</label> <div class="field is-horizontal"><div class="field-body"><div class="field"><div class="control has-icons-left"><input class="input" type="text" placeholder="First Name" name="firstName"${add_attribute("value", firstName, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-o24bp1"><i class="fa fa-id-card"></i></span></div></div> <div class="field"><div class="control has-icons-left"><input class="input" type="text" placeholder="Last Name" name="lastName"${add_attribute("value", lastName, 0)}> <span class="icon is-small is-left" data-svelte-h="svelte-o24bp1"><i class="fa fa-id-card"></i></span></div></div></div></div>`;
});
const SignupForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} <form>${validate_component(UserDetails, "UserDetails").$$render(
      $$result,
      { firstName, lastName },
      {
        firstName: ($$value) => {
          firstName = $$value;
          $$settled = false;
        },
        lastName: ($$value) => {
          lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(UserCredentials, "UserCredentials").$$render(
      $$result,
      { email, password },
      {
        email: ($$value) => {
          email = $$value;
          $$settled = false;
        },
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="button is-success is-fullwidth" data-svelte-h="svelte-1ly26b4">Create Account</button> <br></form>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight is-default is-bold"><div class="hero-head"></div> <div class="hero-body"><div class="container"><div class="columns is-vcentered"><div class="column is-5"><h1 class="title has-text-centered" data-svelte-h="svelte-1kt54vj">Signup to Rustic Ramblers</h1> <div class="box">${validate_component(SignupForm, "SignupForm").$$render($$result, {}, {}, {})} <p class="has-text-centered" data-svelte-h="svelte-c2gunn">Already have an account? <a href="/login" data-cy="login-redirect">Login Here</a></p></div></div> <div class="column is-6 is-offset-1" data-svelte-h="svelte-1f61e3p"><figure class="image is-4by3"><img class="object-fit" src="/greenway.png" alt="greenway"></figure></div></div></div></div></section>`;
});
export {
  Page as default
};
