import { SearchState } from "./type";

export const initialState: SearchState = {
  films: [],
  searchResponse: undefined,
  loading: false,
  error: undefined,
};
