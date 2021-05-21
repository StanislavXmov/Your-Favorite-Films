import { FavoriteAction, FavoriteActions } from "../actions";
import { initialFavoriteState, FavoriteState } from "../state";

export function favorite(
  state: FavoriteState = initialFavoriteState,
  action: FavoriteActions
): FavoriteState {
  switch (action.type) {
    case FavoriteAction.GetFavorite:
      return {
        ...state,
        favoritesFilms: [...action.payload],
      };
    case FavoriteAction.AddFavorite:
      return {
        ...state,
        favoritesFilms: [...state.favoritesFilms, action.payload],
      };
    case FavoriteAction.RemoveFavorite:
      return {
        ...state,
        favoritesFilms: state.favoritesFilms.filter(
          (film) => film.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
