export type SearchState = {
  films: Film[];
  searchResponse?: ResponseApi;
  error?: ResponseError;
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
  backdropPath: string;
  id: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
};

export const initialState: SearchState = {
  films: [],
  searchResponse: undefined,
  loading: false,
  error: undefined,
};
