import { useState } from "react";

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
  title: boolean;
  date: boolean;
  lang: boolean;
};

export const FilterBox = ({
  films,
  filteredFilms,
  setFilteredFilms,
}: Props) => {
  const [filteredState, setFilteredState] = useState({
    title: false,
    date: false,
    lang: false,
  });
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Styled.Form onSubmit={(event) => submitHandler(event)}>
      <FilterByTitle
        films={films}
        filteredFilms={filteredFilms}
        setFilteredFilms={setFilteredFilms}
        setFilteredState={setFilteredState}
        filteredState={filteredState}
      />
      <Styled.FilterByWrapper>
        Filter By:
        <FilterByDate
          films={films}
          filteredFilms={filteredFilms}
          setFilteredFilms={setFilteredFilms}
          setFilteredState={setFilteredState}
          filteredState={filteredState}
        />
        <FilterByLang />
      </Styled.FilterByWrapper>
    </Styled.Form>
  );
};
