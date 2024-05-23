const load = ({ cookies }) => {
  const cookieStr = cookies.get("placemark-user");
  if (cookieStr) {
    const session = JSON.parse(cookieStr);
    return {
      session
    };
  }
};
export {
  load
};
