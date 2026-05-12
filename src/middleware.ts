import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // If no auth cookie is present and they are trying to access protected routes,
  // redirect them to the login page.
  // Note: Since this is a demo, we are checking for a fake "is_logged_in" cookie.
  // In a real Supabase app, you would use createServerClient from @supabase/ssr here.
  
  const { pathname } = request.nextUrl;
  
  // Protect the dashboard (/) and roadmap pages
  const isProtectedRoute = pathname === '/' || pathname.startsWith('/roadmap');
  const isLoginPage = pathname === '/login';

  // For demonstration purposes, we will not force redirect right now 
  // so you can still view the app without logging in.
  // To enforce auth, uncomment the logic below:
  /*
  const hasAuthToken = request.cookies.has('sb-access-token'); // Or your custom auth cookie
  
  if (isProtectedRoute && !hasAuthToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  if (isLoginPage && hasAuthToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  */

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
