import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { password }: { password: string } = await req.json();
        const correctPassword = process.env.CASE_STUDY_PASSWORD;

        if (!correctPassword) {
            return NextResponse.json({error: "Server error: No password set."}, {status: 500});
        }

        if (password === correctPassword) {
            const response = NextResponse.json({success: true});
            response.cookies.set("caseStudyAccess", password, {
                path: "/",
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 7,
            });
            return response;
        }

        return NextResponse.json({error: "Incorrect password"}, {status: 401});
    } catch (error) {
        return NextResponse.json({error: "Invalid request"}, {status: 400});
    }
}