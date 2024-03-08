import { ResponseWithResults, TmdbMovieOverviewDetail } from "@/app/types/tmdb";
import { getDiscoverEndpoint } from "@/app/utils/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  try {
    const res = await fetch(getDiscoverEndpoint(page || "1"));
    const data: ResponseWithResults<TmdbMovieOverviewDetail> = await res.json();
    return NextResponse.json<ResponseWithResults<TmdbMovieOverviewDetail>>(
      data
    );
  } catch (error: any) {
    return NextResponse.error();
  }
}
