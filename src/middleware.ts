import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("session")?.value;
  const role = request.cookies.get("role")?.value;
  const impersonate = request.cookies.get("impersonate")?.value;

  // /host root is public (landing page)
  if (pathname === "/host") {
    return NextResponse.next();
  }

  // /space-details/* is public unless checkout modal
  if (pathname.startsWith("/space-details/")) {
    const checkoutModal = request.nextUrl.searchParams.get("checkoutModal");
    if (!checkoutModal) return NextResponse.next();
  }

  // Protected routes require session
  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("auth", "WelcomeBack");
    url.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(url);
  }

  // Admin routes require admin role (unless impersonating)
  if (pathname.startsWith("/admin") && !impersonate) {
    const roles = role?.split(",") || [];
    if (!roles.includes("admin")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/host/:path+",
    "/account-setting/:path*",
    "/admin/:path*",
    "/manage-bookings/:path*",
    "/messages/:path*",
    "/select-addons/:path*",
    "/space-details/:path*",
  ],
};
