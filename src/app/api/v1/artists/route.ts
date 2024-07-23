import { NextResponse } from "next/server";
import data from "@/app/api/v1/_data/data";

export function GET(): NextResponse {
    return new NextResponse(JSON.stringify(data.artists));
}

/*
 * Example post request that modifies the in-memory data

export async function POST(request: Request): Promise<NextResponse> {
    const body = await request.json();
    const index = data.artists.findIndex(artist => artist.id === body.id);
    data.artists[index].test = body.id;
    return new NextResponse(JSON.stringify(data.artists[index]));
}
 */