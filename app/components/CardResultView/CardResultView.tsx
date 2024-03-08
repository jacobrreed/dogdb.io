import { ResponseWithResults, TmdbMovieOverviewDetail } from "@/app/types/tmdb";
import { Spinner } from "@nextui-org/react";
import { MovieOverviewCard } from "../MovieOverviewCard/MovieOverviewCard";
import { InfiniteData } from "@tanstack/react-query";

interface Props {
  fetchNextPage: () => void;
  data:
    | InfiniteData<ResponseWithResults<TmdbMovieOverviewDetail> | unknown>
    | undefined;
  isLoading: boolean;
  isFetching: boolean;
}
export const CardResultView: React.FC<Props> = ({
  fetchNextPage,
  data,
  isLoading,
  isFetching,
}) => {
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  return (
    <main
      className="dark text-foreground bg-background relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      {data && data.pages && (
        <div className="container m-auto grid lg:grid-cols-5 lg:gap-4 md:grid-cols-3 md:gap-2 sm:grid-cols-1 sm:gap-1">
          {data?.pages?.map((page) =>
            page.results.map((movie) => (
              <MovieOverviewCard key={movie.id} movie={movie} />
            )),
          )}
        </div>
      )}
      <footer className="flex items-center justify-center mt-5">
        {isLoading || isFetching ? (
          <Spinner label="Loading more result..." />
        ) : null}
      </footer>
    </main>
  );
};

export default CardResultView;
