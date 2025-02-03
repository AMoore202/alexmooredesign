import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const password = "ComplexSystemsUX";
    if (req.url === "/") {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("caseStudyAccess");
    if (cookie?.value === password) {
        return NextResponse.next();
    }

    if (url.pathname.startsWith("/loadflightcasestudy")) {
        return NextResponse.redirect(new URL("/password-protected", req.url));
    }

  return NextResponse.next();
}