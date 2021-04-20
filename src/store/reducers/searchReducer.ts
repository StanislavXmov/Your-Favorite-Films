import { SearchAction, SearchActions } from "../actions";
import { initialState, SearchState } from "../state";

export function search(
  state: SearchState = initialState,
  action: SearchActions
): SearchState {
  switch (action.type) {
    case SearchAction.SearchFilmsSuccess:
      return {
        ...state,
        films: action.payload,
      };

    default:
      return state;
  }
}
