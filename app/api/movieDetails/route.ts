import { TmdbMovieDetail } from "@/app/types/tmdb";
import { getMovieDetailEndpoint } from "@/app/utils/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    if (!id) {
      return NextResponse.error();
    }
    const res = await fetch(getMovieDetailEndpoint(id));
    const data: TmdbMovieDetail = await res.json();
    return NextResponse.json<TmdbMovieDetail>(data);
  } catch (error: any) {
    console.log(error.message);
  }
}
