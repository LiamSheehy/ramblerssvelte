import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.BhOaCN2v.js","_app/immutable/chunks/scheduler.BVKwUkgL.js","_app/immutable/chunks/index.BJVizwO2.js","_app/immutable/chunks/entry.BQpUHGpu.js","_app/immutable/chunks/index.6Rbrwy58.js","_app/immutable/chunks/stores.BsF8LMy-.js"];
export const stylesheets = [];
export const fonts = [];
