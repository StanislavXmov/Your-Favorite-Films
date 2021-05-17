import { Dispatch, SetStateAction, useState } from "react";

import { Film } from "store/state";

import { FilterState } from "../FilterBox";
import * as Styled from "./FilterByLang.styles";

type Props = {
  films: Film[];
  filteredFilms: Film[];
  setFilteredFilms: (films: Film[]) => void;
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByLang = ({
  films,
  filteredFilms,
  setFilteredFilms,
  setFilteredState,
  filteredState,
}: Props) => {
  const [filteredBeforeChange, setFilteredBeforeChange] = useState<
    null | Film[]
  >(null);
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
    // TODO
    // if (filteredState.date || filteredState.title) {
    //   return getOptions(filteredFilms);
    // }
    return getOptions(films);
  };
  const selectHandler = (lang: string) => {
    if (lang === "all") {
      if (filteredState.date || filteredState.title) {
        if (filteredBeforeChange) {
          setFilteredFilms([...filteredBeforeChange]);
        } else {
          setFilteredFilms([...filteredFilms]);
        }
      } else {
        setFilteredFilms([...films]);
      }
      // setFilteredBeforeChange(null);
      setFilteredState({ ...filteredState, lang: false });
    } else {
      if (!filteredBeforeChange) {
        setFilteredBeforeChange([...filteredFilms]);
      }
      if (filteredState.date || filteredState.title) {
        const filtered = filteredFilms.filter(
          ({ originalLanguage }) => originalLanguage === lang
        );
        setFilteredFilms([...filtered]);
      } else {
        const filtered = films.filter(
          ({ originalLanguage }) => originalLanguage === lang
        );
        setFilteredFilms([...filtered]);
      }
      setFilteredState({ ...filteredState, lang: true });
    }
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
