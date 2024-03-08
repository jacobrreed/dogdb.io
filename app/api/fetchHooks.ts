import { ResponseWithResults, TmdbMovieOverviewDetail } from "@/app/types/tmdb";
import { useInfiniteQuery } from "@tanstack/react-query";
import { basicFetch } from "./fetchFunctions";

export const useFetchDiscovery = () => {
  return useInfiniteQuery<ResponseWithResults<TmdbMovieOverviewDetail>>({
    initialPageParam: 1,
    queryKey: ["page"],
    queryFn: ({ pageParam = 1 }) =>
      basicFetch(`/api/discover?page=${pageParam}`),
    getNextPageParam: (
      lastPage: ResponseWithResults<TmdbMovieOverviewDetail>
    ) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
};

export const useFetchMoviesBySearch = (query: string = "%20") => {
  return useInfiniteQuery<ResponseWithResults<TmdbMovieOverviewDetail>>({
    initialPageParam: 1,
    queryKey: ["page"],
    queryFn: ({ pageParam = 1 }) =>
      basicFetch(`/api/movie/search?query=${query}&page=${pageParam}`),
    getNextPageParam: (
      lastPage: ResponseWithResults<TmdbMovieOverviewDetail>
    ) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
};
