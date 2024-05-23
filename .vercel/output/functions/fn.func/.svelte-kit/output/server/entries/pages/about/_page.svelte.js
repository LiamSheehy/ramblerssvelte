import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { s as subTitle } from "../../../chunks/stores.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns" data-svelte-h="svelte-i34mfl"><div class="column is-5"><section class="section"><h1 style="font-size: 2em; font-family: 'Your Rustic Font', sans-serif;">Hello from Rustic Ramblers</h1> <br><br> <p style="font-family: 'Your Rustic Font', sans-serif;">Trekking, walking, and climbing are a transformative journey that unveils nature&#39;s unparalleled beauty. The rhythmic crunch of gravel beneath sturdy boots, the fresh mountain air, and the vibrant hues of untouched landscapes offer a sensory symphony. Each step resonates with the joy of exploration, as winding trails lead to hidden vistas and serene landscapes. The journey itself becomes an ode to the boundless wonders of our planet. Rustic Ramblers aim to share the beauty of these treks so all can experience their wonder.
          <br><br>
          Enjoy the journey but leave no trace. Whatever you take with you, bring it home.</p></section></div> <div class="column"><div class="columns is-multiline"><div class="column is-6"><figure class="image"><img src="/mountain.png" alt="Mountains"></figure></div> <div class="column is-6"><figure class="image"><img src="/forest.png" alt="Forest"></figure></div> <div class="column is-6"><figure class="image"><img src="/greenway.png" alt="Greenway"></figure></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("About the site");
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
