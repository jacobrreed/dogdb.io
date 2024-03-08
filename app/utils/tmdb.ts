import { TmdbPosterSize } from "@/app/types/tmdb";

export enum TmdbEndpoints {
  Discover = "https://api.themoviedb.org/3/discover/movie",
  MovieDetail = "https://api.themoviedb.org/3/movie",
  MovieSearch = "https://api.themoviedb.org/3/search/movie",
}

export const getDiscoverEndpoint = (page: string = "1") => {
  return `${generateTmdbDestination(TmdbEndpoints.Discover)}&page=${page}`;
};

export const getMovieDetailEndpoint = (movieId: string) => {
  const endpoint = `${TmdbEndpoints.MovieDetail}/${movieId}`;
  return generateTmdbDestination(endpoint);
};

export const getMovieSearchEndpoint = (query: string) => {
  const endpoint = TmdbEndpoints.MovieSearch;
  return generateTmdbDestination(endpoint) + `&query=${query}`;
};

export const generateTmdbDestination = (endpoint: TmdbEndpoints | string) => {
  return `${endpoint}?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`;
};

export const TMDB_BASE_PATH = "https://image.tmdb.org/t/p/";

export const getTmdbPosterPath = (posterSize: TmdbPosterSize, path: string) => {
  return `${TMDB_BASE_PATH}${posterSize}${path}`;
};
