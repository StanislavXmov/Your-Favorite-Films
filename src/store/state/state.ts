import { SearchState } from "./types";

export const initialState: SearchState = {
  films: [],
  searchResponse: null,
  loading: false,
  error: null,
};
