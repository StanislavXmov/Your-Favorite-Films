import { SearchState, FavoriteState } from "./types";

export const initialSearchState: SearchState = {
  films: [],
  searchResponse: null,
  loading: false,
  error: null,
};

export const initialFavoriteState: FavoriteState = {
  favoritesFilms: [],
};
