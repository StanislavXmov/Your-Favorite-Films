/* eslint-disable camelcase */
export type SearchState = {
  films: Film[];
  searchResponse: ResponseApi | null;
  error: ResponseError | null;
  loading: boolean;
};

export type ResponseApi = {
  page: number;
  results: Film[];
  totalPages: number;
  totalResults: number;
};

export type ResponseError = {
  message: string;
};

export type Film = {
  adult: boolean;
  genreIds: number[];
  backdropPath: string;
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};
