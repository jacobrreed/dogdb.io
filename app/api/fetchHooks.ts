import { useInfiniteQuery } from "@tanstack/react-query";
import { basicFetch } from "./fetchFunctions";
import { ResponseWithResults, TmdbDiscoverResponse } from "@/app/types/tmdb";

export const useFetchDiscovery = () => {
  return useInfiniteQuery<ResponseWithResults<TmdbDiscoverResponse>>({
    initialPageParam: 1,
    queryKey: ["page"],
    queryFn: ({ pageParam = 1 }) =>
      basicFetch(`/api/discover?page=${pageParam}`),
    getNextPageParam: (lastPage: ResponseWithResults<TmdbDiscoverResponse>) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
};
