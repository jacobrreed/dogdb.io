"use client";
import { CircularProgress } from "@nextui-org/react";
import { MovieOverviewCard } from "@/app/components/MovieOverviewCard/MovieOverviewCard";
import { Pagination } from "@nextui-org/react";
import React from "react";
import { ResponseWithResults, TmdbDiscoverResponse } from "@/app/types/tmdb";

export default function Discover() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState<string>();
  const [data, setData] = React.useState<
    ResponseWithResults<TmdbDiscoverResponse> | undefined
  >(undefined);
  const onPage = React.useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  React.useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/d?id=" + currentPage);
      if (response) {
        const data: ResponseWithResults<TmdbDiscoverResponse> =
          await response.json();
        console.error(data);
        setData(data);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="dark text-foreground bg-background">
      {isLoading && <CircularProgress size="lg" />}
      {!!isError && <div>{isError}</div>}
      {!isLoading && !isError && (
        <>
          <Pagination
            total={data?.total_pages ?? 0 > 500 ? 500 : data?.total_pages ?? 0}
            initialPage={currentPage}
            showControls
            onChange={onPage}
            className="m-auto"
          />
          <div className="container m-auto grid lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-2 sm:grid-cols-1 sm:gap-1">
            {data?.results?.map((movie) => (
              <MovieOverviewCard key={movie.id} movieId={movie.id} />
            ))}
          </div>
          <footer>
            <Pagination
              total={
                data?.total_pages ?? 0 > 500 ? 500 : data?.total_pages ?? 0
              }
              initialPage={currentPage}
              showControls
              onChange={onPage}
              className="w-full m-auto"
            />
          </footer>
        </>
      )}
    </main>
  );
}
