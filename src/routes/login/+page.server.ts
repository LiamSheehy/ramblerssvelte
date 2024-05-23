import { dev } from "$app/environment";
import { placemarkService } from "$lib/services/placemark-service";
import { currentSession } from "$lib/stores.js";
import { redirect } from "@sveltejs/kit";
import DOMPurify from 'dompurify';

export const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    let email = form.get("email") as string;
    let password = form.get("password") as string;

    // Sanitize email and password fields using DOMPurify
    email = DOMPurify.sanitize(email);
    password = DOMPurify.sanitize(password);

    if (email === "" || password === "") {
      throw redirect(307, "/");
    } else {
      console.log(`Attempting to log in email: ${email} with password: ${password}`);
      const session = await placemarkService.login(email, password);

      if (session) {
        currentSession.set(session);
        const userJson = JSON.stringify(session);
        cookies.set("placemark-user", userJson, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7 // one week
        });
        throw redirect(303, "/trails");
      } else {
        throw redirect(307, "/");
      }
    }
  }
};
