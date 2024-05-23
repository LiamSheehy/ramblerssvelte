// src/routes/signup/+page.server.ts
import { hash } from 'bcrypt';
import { dev } from '$app/environment';
import { placemarkService } from '$lib/services/placemark-service';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import DOMPurify from 'dompurify';

export const actions: Actions = {
  signup: async ({ request, cookies }) => {
    const form = await request.formData();
    let firstName = form.get('firstName') as string;
    let lastName = form.get('lastName') as string;
    let email = form.get('email') as string;
    let password = form.get('password') as string;

    // Sanitize user inputs
    firstName = DOMPurify.sanitize(firstName);
    lastName = DOMPurify.sanitize(lastName);
    email = DOMPurify.sanitize(email);
    password = DOMPurify.sanitize(password);

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create user
    const success = await placemarkService.signup({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // If successful, set session and redirect
    if (success) {
      const user = await placemarkService.login(email, password); // Re-login to get session data
      if (user) {
        const userJson = JSON.stringify(user);
        cookies.set('placemark-user', userJson, {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          secure: !dev,
          maxAge: 60 * 60 * 24 * 7 // one week
        });
        throw redirect(303, '/trails');
      }
    } else {
      throw redirect(307, '/');
    }
  }
};
