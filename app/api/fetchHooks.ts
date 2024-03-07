import { useInfiniteQuery } from "@tanstack/react-query";
import { basicFetch } from "./fetchFunctions";
import {
  MergedDiscoverResponse,
  ResponseWithResults,
  TmdbDiscoverResponse,
} from "@/app/types/tmdb";

export const useFetchDiscovery = () => {
  return useInfiniteQuery<MergedDiscoverResponse>({
    initialPageParam: 1,
    queryKey: ["page"],
    queryFn: ({ pageParam = 1 }) =>
      basicFetch(`/api/discover?page=${pageParam}`),
    getNextPageParam: (lastPage: MergedDiscoverResponse) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
};
