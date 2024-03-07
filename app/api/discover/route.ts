import {
  ResponseWithResults,
  TmdbDiscoverResponse,
  MergedDiscoverResponse,
  TmdbMovieDetail,
} from "@/app/types/tmdb";
import { getDiscoverEndpoint, getMovieDetailEndpoint } from "@/app/utils/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  try {
    const res = await fetch(getDiscoverEndpoint(page || "1"));
    const data: ResponseWithResults<TmdbDiscoverResponse> = await res.json();
    const results = await Promise.all(
      data?.results.map(async (movie) => {
        const movieResponse = await fetch(
          getMovieDetailEndpoint(movie.id.toString())
        );
        const movieData: TmdbMovieDetail = await movieResponse.json();
        return {
          ...movie,
          movieData,
        };
      })
    );
    let result: MergedDiscoverResponse = {
      ...data,
      results,
    };
    return NextResponse.json<MergedDiscoverResponse>(result);
  } catch (error: any) {
    return NextResponse.error();
  }
}
