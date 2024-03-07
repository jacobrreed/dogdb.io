"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CircularProgress,
} from "@nextui-org/react";

import { TmdbMovieDetail, TmdbPosterSize } from "@/app/types/tmdb";
import { getTmdbPosterPath } from "@/app/utils/tmdb";

interface Props {
  movieId: number;
}

export const MovieOverviewCard: React.FC<Props> = ({ movieId }) => {
  const [data, setData] = React.useState<TmdbMovieDetail>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string>();
  const fetchData = async () => {
    try {
      const response = await fetch("/api/movie?id=" + movieId);
      if (response) {
        const data: TmdbMovieDetail = await response.json();
        setData(data);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div>Failed to load TMDB movie data...</div>;
  if (loading) return <CircularProgress aria-label="Loading..." />;
  if (data)
    return (
      <Card className="py-4 mx-auto" isPressable>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{data?.title}</h4>
          <small className="text-default-500">TODO Stars</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={getTmdbPosterPath(TmdbPosterSize.W342, data?.poster_path)}
            width={270}
          />
        </CardBody>
      </Card>
    );
};
