import { Film } from "store/state";

// eslint-disable-next-line no-shadow
export enum FavoriteAction {
  GetFavorite = "GET_FAVORITEES_FILMS",
  AddFavorite = "ADD_FAVORITE_FILM",
  RemoveFavorite = "REMOVE_FAVORITE_FILM",
}
type GetFavoriteAction = {
  type: FavoriteAction.GetFavorite;
  payload: Film[];
};

type AddFavoriteAction = {
  type: FavoriteAction.AddFavorite;
  payload: Film;
};
type RemoveFavoriteAction = {
  type: FavoriteAction.RemoveFavorite;
  payload: number;
};

export type FavoriteActions =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | GetFavoriteAction;

export const getFavoritesFilms = (): GetFavoriteAction => {
  let favoritesFilms: Film[];
  const storage = localStorage.getItem("favorites");
  if (storage) {
    favoritesFilms = JSON.parse(storage);
  } else {
    favoritesFilms = [];
  }
  return { type: FavoriteAction.GetFavorite, payload: favoritesFilms };
};
export const addFavoriteFilm = (film: Film): AddFavoriteAction => {
  let favoritesFilms: Film[];
  const storage = localStorage.getItem("favorites");
  if (storage) {
    favoritesFilms = JSON.parse(storage);
  } else {
    favoritesFilms = [];
  }
  favoritesFilms.push(film);
  localStorage.setItem("favorites", JSON.stringify(favoritesFilms));
  return {
    type: FavoriteAction.AddFavorite,
    payload: film,
  };
};
export const removeFavoriteFilm = (id: number): RemoveFavoriteAction => {
  let favoritesFilms: Film[];
  const storage = localStorage.getItem("favorites");
  if (storage) {
    favoritesFilms = JSON.parse(storage);
  } else {
    favoritesFilms = [];
  }
  favoritesFilms = favoritesFilms.filter((film) => film.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favoritesFilms));
  return {
    type: FavoriteAction.RemoveFavorite,
    payload: id,
  };
};
