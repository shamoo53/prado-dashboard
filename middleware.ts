import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the user is trying to access dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // In a real app, you would check for a valid session/token
    // For demo purposes, we'll allow access
    // You can implement proper authentication logic here
    // Example: Check for auth cookie/token
    // const token = request.cookies.get('auth-token')
    // if (!token) {
    //   return NextResponse.redirect(new URL('/auth/signin', request.url))
    // }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
