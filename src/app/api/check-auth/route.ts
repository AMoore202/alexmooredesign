import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("caseStudyAccess");
  const correctPassword = process.env.CASE_STUDY_PASSWORD;

  if (cookie?.value === correctPassword) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false });
}
