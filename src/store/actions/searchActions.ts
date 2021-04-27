import axios from "axios";
import { Dispatch } from "redux";

import { apiResponseParser } from "../../api";
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

const apiUrl = "https://api.themoviedb.org/3/search/movie";
const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`;
const pageQuery = "&page=1";
const query = "&query=";

export const searchFilms = (title: string) => async (
  dispatch: Dispatch<SearchActions>
) => {
  try {
    dispatch({ type: SearchAction.SearchFilmsRequest });
    const { data } = await axios.get<ResponseApi>(
      `${apiUrl}${apiKey}${pageQuery}${query}${title}`
    );
    const response = apiResponseParser(data);
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
