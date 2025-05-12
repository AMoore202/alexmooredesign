import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const password = process.env.CASE_STUDY_PASSWORD;

  const cookie = req.cookies.get("caseStudyAccess");

  // if (cookie?.value === password) {
  //   return NextResponse.next();
  // }else{
  //   const redirectUrl = new URL("/password", req.url);
  //   redirectUrl.searchParams.set("redirect", url.pathname);
  //   return NextResponse.redirect(redirectUrl);
  // };

  console.log("Middleware ran");
  return NextResponse.next(); // added for testing
}

export const config = {
  matcher: ["/casestudy/:path*"],
};