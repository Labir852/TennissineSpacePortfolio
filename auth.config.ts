import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

// Edge-compatible config shared by middleware AND auth.ts
// NO Node.js modules (mongoose, bcrypt) allowed here
export const authConfig = {
  providers: [], // Providers are added in auth.ts
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Populate JWT token with role from the user object on login
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    // Expose role and id on the session.user object
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    // Gate admin routes in middleware
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = !!auth?.user;
      const userRole = auth?.user?.role;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");

      if (isAdminPage) {
        if (isLoggedIn && userRole === "admin") return true;
        return false; // Redirect unauthenticated/non-admin to login
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;

export const { auth: middlewareAuth } = NextAuth(authConfig);
