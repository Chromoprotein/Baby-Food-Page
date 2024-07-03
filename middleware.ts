// initializing NextAuth.js with the authConfig object and exporting the auth property
// also using the matcher option from Middleware to specify that it should run on specific paths

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};