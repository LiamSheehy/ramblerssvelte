import { D as DEV, r as redirect } from "../../../chunks/index2.js";
import { p as placemarkService } from "../../../chunks/placemark-service.js";
import { c as currentSession } from "../../../chunks/stores.js";
const dev = DEV;
const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`attemting to log in email: ${email} with password: ${password}`);
      const session = await placemarkService.login(email, password);
      if (session) {
        currentSession.set(session);
        const userJson = JSON.stringify(session);
        cookies.set("placemark-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7
          // one week
        });
        throw redirect(303, "/trails");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};
export {
  actions
};
