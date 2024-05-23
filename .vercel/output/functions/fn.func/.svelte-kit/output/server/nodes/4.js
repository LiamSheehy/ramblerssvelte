import * as server from '../entries/pages/charts/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/charts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/charts/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.t6FCZXp1.js","_app/immutable/chunks/scheduler.BVKwUkgL.js","_app/immutable/chunks/index.BJVizwO2.js","_app/immutable/chunks/Card.qpc5-zEe.js","_app/immutable/chunks/stores.BsF8LMy-.js","_app/immutable/chunks/index.6Rbrwy58.js"];
export const stylesheets = [];
export const fonts = [];
