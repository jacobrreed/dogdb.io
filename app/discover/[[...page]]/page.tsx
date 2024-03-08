"use client";

import { CircularProgress } from "@nextui-org/react";
import { useFetchDiscovery } from "@/app/api/fetchHooks";
import CardResultView from "@/app/components/CardResultView/CardResultView";

export default function Home({ params }: { params: { page: string } }) {
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchDiscovery();

  if (error) return <div>Failed to fetch discovery movies from TMDB</div>;
  if (isLoading) return <CircularProgress size="lg" />;

  return (
    <CardResultView
      data={data}
      fetchNextPage={fetchNextPage}
      isLoading={isLoading}
      isFetching={isFetching}
    />
  );
}
