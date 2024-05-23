const load = async ({ cookies }) => {
  cookies.delete("placemark-user", { path: "/" });
};
export {
  load
};
