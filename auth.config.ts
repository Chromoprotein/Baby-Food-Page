// configuration options for NextAuth.js
// callbacks: logic to protect routes

import type { NextAuthConfig } from 'next-auth';
 
type SessionProps = {
  session: any;
  token: any;
};

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
    session: async ({ session, token }: SessionProps) => {
      if (session?.user) {
        session.user.id = token.sub;
        delete session.user.email; // sanitize data for security
      }
      return session;
    },

  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;