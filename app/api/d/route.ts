import {
  ApiResponse,
  ResponseWithResults,
  TmdbDiscoverResponse,
} from "@/app/types/tmdb";
import { getDiscoverEndpoint } from "@/app/utils/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    const res = await fetch(getDiscoverEndpoint(id || "1"));
    const data: ResponseWithResults<TmdbDiscoverResponse> = await res.json();
    return NextResponse.json<ResponseWithResults<TmdbDiscoverResponse>>(data);
  } catch (error: any) {
    console.log(error.message);
  }
}
