import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const userEmail = "user@test.com"
      // Check if the user is logged in and has the specified user ID
      const isSpecificUser = auth?.user?.email === userEmail;
    
      // Check if the user is trying to visit certain links
      const isOnCreateInvoice = nextUrl.pathname.startsWith('/dashboard/invoices/create');
      const isOnCreateUser = nextUrl.pathname.startsWith('/dashboard/create');
    
      if (isSpecificUser && (isOnCreateInvoice || isOnCreateUser)) {
        return Response.redirect(new URL('/dashboard', nextUrl)); // Redirect to the dashboard
      }
    
      // Check if the user is on the dashboard
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
    
      if (isOnDashboard) {
        if (isLoggedIn) return true; // Allow authenticated users to access the dashboard
        return false; // Redirect unauthenticated users to the login page
      }
    
      return true;
    },
    
  },
  providers: [], 
} satisfies NextAuthConfig;

