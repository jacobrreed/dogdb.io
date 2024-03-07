"use client";

import { CircularProgress } from "@nextui-org/react";
import { MovieOverviewCard } from "@/app/components/MovieOverviewCard/MovieOverviewCard";
import React from "react";
import { useFetchDiscovery } from "@/app/api/fetchHooks";

export default function Home({ params }: { params: { page: string } }) {
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchDiscovery();
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Failed to fetch discovery movies from TMDB</div>;
  if (isLoading) return <CircularProgress size="lg" />;

  return (
    <main
      className="dark text-foreground bg-background"
      onScroll={handleScroll}
    >
      {data && data.pages && (
        <div className="container m-auto grid lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-2 sm:grid-cols-1 sm:gap-1">
          {data?.pages?.map((page) =>
            page.results.map((movie) => (
              <MovieOverviewCard key={movie.id} movieId={movie.id} />
            ))
          )}
        </div>
      )}
    </main>
  );
}
