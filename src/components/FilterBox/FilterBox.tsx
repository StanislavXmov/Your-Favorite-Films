import { useEffect, useState } from "react";

import { Film } from "store/state";

import { FilterByDate } from "./FilterByDate";
import { FilterByTitle } from "./FilterByTitle";
import { FilterByLang } from "./FilterByLang";
import * as Styled from "./FilterBox.styles";

type Props = {
  films: Film[];
  filteredFilms: Film[];
  setFilteredFilms: (films: Film[]) => void;
};

export type FilterState = {
  title: null | string;
  date: null | boolean;
  lang: null | string;
};

export const FilterBox = ({ films, setFilteredFilms }: Props) => {
  const [filteredState, setFilteredState] = useState<FilterState>({
    title: null,
    date: null,
    lang: null,
  });
  const getDate = (film: Film) => {
    return new Date(film.releaseDate);
  };
  useEffect(() => {
    let filtered = [...films];

    if (filteredState.title) {
      const query = filteredState.title;
      filtered = filtered.filter(({ title }) =>
        title.toLowerCase().startsWith(query.toLowerCase())
      );
    }
    if (filteredState.lang) {
      const { lang } = filteredState;
      if (lang !== "all") {
        filtered = filtered.filter(
          ({ originalLanguage }) => originalLanguage === lang
        );
      }
    }
    if (filteredState.date) {
      filtered = filtered.sort((filmA, filmB) => {
        if (getDate(filmA) > getDate(filmB)) {
          return -1;
        }
        return 1;
      });
    } else if (filteredState.date === false) {
      filtered = filtered.sort((filmA, filmB) => {
        if (getDate(filmA) > getDate(filmB)) {
          return 1;
        }
        return -1;
      });
    }
    setFilteredFilms([...filtered]);
  }, [filteredState]);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Styled.Form onSubmit={(event) => submitHandler(event)}>
      <FilterByTitle
        setFilteredState={setFilteredState}
        filteredState={filteredState}
      />
      <Styled.FilterByWrapper>
        Filter By:
        <FilterByDate
          setFilteredState={setFilteredState}
          filteredState={filteredState}
        />
        <FilterByLang
          films={films}
          setFilteredState={setFilteredState}
          filteredState={filteredState}
        />
      </Styled.FilterByWrapper>
    </Styled.Form>
  );
};
