import { SearchAction, SearchActions } from "../actions";
import { initialState, SearchState } from "../state";

export function search(
  state: SearchState = initialState,
  action: SearchActions
): SearchState {
  switch (action.type) {
    case SearchAction.SearchFilmsRequest:
      return {
        ...state,
        loading: true,
        films: [],
        searchResponse: undefined,
      };
    case SearchAction.SearchFilmsSuccess:
      return {
        ...state,
        loading: false,
        searchResponse: action.payload,
        films: action.payload.results,
      };
    case SearchAction.SearchFilmsFail:
      return {
        loading: false,
        films: [],
        searchResponse: undefined,
        error: action.payload,
      };

    default:
      return state;
  }
}
