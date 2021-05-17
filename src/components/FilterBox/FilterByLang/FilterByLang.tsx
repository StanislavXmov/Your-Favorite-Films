import { Dispatch, SetStateAction } from "react";

import { Film } from "store/state";

import { FilterState } from "../FilterBox";
import * as Styled from "./FilterByLang.styles";

type Props = {
  films: Film[];
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByLang = ({
  films,
  setFilteredState,
  filteredState,
}: Props) => {
  const getOptions = (favoritesFilms: Film[]) => {
    const languages: string[] = [];
    favoritesFilms.forEach((film) => {
      const lang = `${film.originalLanguage
        .charAt(0)
        .toUpperCase()}${film.originalLanguage.slice(1)}`;
      if (!languages.includes(lang)) {
        languages.push(lang);
      }
    });
    return languages.map((key) => (
      <option key={key} value={key.toLowerCase()}>
        {key}
      </option>
    ));
  };
  const renderOptions = () => {
    return getOptions(films);
  };
  const selectHandler = (lang: string) => {
    setFilteredState({ ...filteredState, lang });
  };
  return (
    <Styled.SelectWrapper>
      <Styled.LangLabel htmlFor="lang">Language</Styled.LangLabel>
      <Styled.LangSelect
        id="lang"
        onChange={(event) => selectHandler(event.target.value)}
      >
        <option value="all" defaultValue="all">
          All
        </option>
        {renderOptions()}
      </Styled.LangSelect>
    </Styled.SelectWrapper>
  );
};
