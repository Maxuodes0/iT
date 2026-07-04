import {NextResponse, type NextRequest} from "next/server";
import {defaultLocale} from "./lib/locales";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"]
};
