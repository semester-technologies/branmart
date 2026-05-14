import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIXES = [
  // "/dashboard",
  // "/store-setup",
  "/business-setup",
  "/choose-gateway",
];
const AUTH_ONLY_ROUTES = [
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("branmart_access")?.value;

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix),
  );
  const isAuthRoute = AUTH_ONLY_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  // Unauthenticated user hitting a protected route → sign in
  if (isProtected && !token) {
    const loginUrl = new URL("/sign-in", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Authenticated user hitting an auth route → dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
