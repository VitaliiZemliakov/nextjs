import { NextResponse } from "next/server";

export function middleware(request: Request) {
    console.log("Middleware executed for request:", request);
    return NextResponse.next()
}

export const config = {
    matcher: ["/news"],
}