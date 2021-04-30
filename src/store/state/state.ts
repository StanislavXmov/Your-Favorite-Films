import { SearchState } from "./types";

export const initialState: SearchState = {
  films: [],
  searchResponse: undefined,
  loading: false,
  error: undefined,
};
