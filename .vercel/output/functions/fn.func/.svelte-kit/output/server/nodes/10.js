import * as server from '../entries/pages/trails/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trails/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/trails/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.B4JGpg0V.js","_app/immutable/chunks/scheduler.BVKwUkgL.js","_app/immutable/chunks/index.BJVizwO2.js","_app/immutable/chunks/stores.BsF8LMy-.js","_app/immutable/chunks/index.6Rbrwy58.js","_app/immutable/chunks/Card.qpc5-zEe.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.BQpUHGpu.js"];
export const stylesheets = [];
export const fonts = [];
