// configuration options for NextAuth.js
// callbacks: logic to protect routes

import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnBabyPage = nextUrl.pathname.startsWith('/baby');
      const isOnFoodPage = nextUrl.pathname.startsWith('/babyfood');
      if (isOnBabyPage || isOnFoodPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/babyfood', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;