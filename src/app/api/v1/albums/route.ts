import { NextResponse } from "next/server";
import data from "@/app/api/v1/_data/data";

export function GET(): NextResponse {
    return new NextResponse(JSON.stringify(data.albums));
}