import axios from "axios";
import { Dispatch } from "redux";

import { parser } from "../../utils";
import { ResponseApi, ResponseError } from "../state";

// eslint-disable-next-line no-shadow
export enum SearchAction {
  SearchFilmsRequest = "SEARCH_FILM_REQUEST",
  SearchFilmsSuccess = "SEARCH_FILM_SUCCESS",
  SearchFilmsFail = "SEARCH_FILM_FAIL",
}

type SearchFilmsRequestAction = {
  type: SearchAction.SearchFilmsRequest;
};

type SearchFilmsFailAction = {
  type: SearchAction.SearchFilmsFail;
  payload: ResponseError;
};

type SearchFilmsSuccessAction = {
  type: SearchAction.SearchFilmsSuccess;
  payload: ResponseApi;
};

export type SearchActions =
  | SearchFilmsSuccessAction
  | SearchFilmsRequestAction
  | SearchFilmsFailAction;

export const searchFilms = (title: string) => async (
  dispatch: Dispatch<SearchActions>
) => {
  try {
    dispatch({ type: SearchAction.SearchFilmsRequest });
    const { data } = await axios.get<ResponseApi>(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&query=${title}`
    );
    const response = parser(data);
    dispatch({
      type: SearchAction.SearchFilmsSuccess,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SearchAction.SearchFilmsFail,
      payload: error.message,
    });
  }
};
