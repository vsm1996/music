import { NextRequest, NextResponse } from "next/server";

export type Artist = {
    id: number;
    name: string;
}

export type Album = {
    id: number;
    name: string;
    release_date: string;
    artists: Artist[];
    num_tracks: number;
    length: number;
    album_cover_uri: string;
}

const MOCK_ALBUMS = [
    {
        id: 1,
        name: "The Dark Side of the Moon",
        release_date: "1973",
        artists: [
            {
                id: 1,
                name: "Pink Floyd"
            }
        ],
        num_tracks: 12,
        length: 120,
        album_cover_uri: "http://localhost:3000/images/album-covers/the-dark-side-of-the-moon.png"
    },
    {
        id: 2,
        name: "The Wall",
        release_date: "1979",
        artists: [
            {
                id: 1,
                name: "Pink Floyd"
            }
        ],
        num_tracks: 12,
        length: 120,
        album_cover_uri: "http://localhost:3000/images/album-covers/the-wall.png"
    },
    {
        id: 3,
        name: "The Endless River",
        release_date: "1980",
        artists: [
            {
                id: 1,
                name: "Pink Floyd"
            }
        ],
        num_tracks: 12,
        length: 120,
        album_cover_uri: "http://localhost:3000/images/album-covers/the-endless-river.png"
    },
]

export function GET(request: NextRequest): NextResponse {
    return new NextResponse(JSON.stringify(MOCK_ALBUMS));
}