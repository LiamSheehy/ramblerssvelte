import * as server from '../entries/pages/signup/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.Cpg7fSHG.js","_app/immutable/chunks/scheduler.BVKwUkgL.js","_app/immutable/chunks/index.BJVizwO2.js","_app/immutable/chunks/entry.BQpUHGpu.js","_app/immutable/chunks/index.6Rbrwy58.js","_app/immutable/chunks/UserCredentials.CCwpB2JH.js"];
export const stylesheets = [];
export const fonts = [];
