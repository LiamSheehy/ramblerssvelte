import * as server from '../entries/pages/report/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/report/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/report/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CeJixsf9.js","_app/immutable/chunks/scheduler.BVKwUkgL.js","_app/immutable/chunks/index.BJVizwO2.js","_app/immutable/chunks/stores.BsF8LMy-.js","_app/immutable/chunks/index.6Rbrwy58.js","_app/immutable/chunks/Card.qpc5-zEe.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
