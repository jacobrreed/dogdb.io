import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { TmdbDiscoverResponse, TmdbPosterSize } from "@/app/types/tmdb";
import { getTmdbPosterPath } from "@/app/utils/tmdb";

interface Props {
  movie: TmdbDiscoverResponse;
}

export const MovieOverviewCard: React.FC<Props> = ({ movie }) => {
  if (movie)
    return (
      <Card className="py-4 mx-auto" isPressable aria-label={movie.title}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{movie?.title}</h4>
          <small className="text-default-500">TODO Stars</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={getTmdbPosterPath(TmdbPosterSize.W342, movie?.poster_path)}
          />
        </CardBody>
      </Card>
    );
};
