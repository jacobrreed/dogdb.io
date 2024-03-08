import { TmdbMovieDetail } from "@/app/types/tmdb";
import { getMovieSearchEndpoint } from "@/app/utils/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  try {
    if (!query) {
      return NextResponse.error();
    }
    const res = await fetch(getMovieSearchEndpoint(query));
    const data: TmdbMovieDetail = await res.json();
    console.log(data);
    return NextResponse.json<TmdbMovieDetail>(data);
  } catch (error: any) {
    console.log(error.message);
  }
}
