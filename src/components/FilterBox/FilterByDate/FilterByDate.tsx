import { useState } from "react";

import { Film } from "store/state";

import * as Styled from "./FilterByDate.styles";

type Props = {
  films: Film[];
  filteredFilms: Film[];
  setFilteredFilms: (films: Film[]) => void;
};

export const FilterByDate = ({
  films,
  filteredFilms,
  setFilteredFilms,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isFilteredByDate, setIsFilteredByDates] = useState(false);

  const dateFilterSymbol = (isFiltered: boolean | null) => {
    if (!isActive) {
      return null;
    }
    if (isFiltered) {
      return <Styled.ArrorUp />;
    }
    return <Styled.ArrorDown />;
  };
  const getDate = (film: Film) => {
    return new Date(film.releaseDate);
  };
  const filterByUp = (unFilteredFilms: Film[]): Film[] => {
    return unFilteredFilms.sort((filmA, filmB) => {
      if (getDate(filmA) > getDate(filmB)) {
        return -1;
      }
      return 1;
    });
  };
  const filterByDown = (unFilteredFilms: Film[]): Film[] => {
    return unFilteredFilms.sort((filmA, filmB) => {
      if (getDate(filmA) > getDate(filmB)) {
        return 1;
      }
      return -1;
    });
  };
  const dateFilterHandler = () => {
    if (!isFilteredByDate && isActive) {
      setIsActive(false);
      setFilteredFilms([...films]);
    } else if (!isFilteredByDate) {
      setIsActive(true);
      setIsFilteredByDates(true);
      const filtered = filterByUp(filteredFilms);
      setFilteredFilms([...filtered]);
    } else {
      setIsFilteredByDates(false);
      const filtered = filterByDown(filteredFilms);
      setFilteredFilms([...filtered]);
    }
  };
  return (
    <Styled.FilterDateButton
      active={isActive}
      type="button"
      onClick={dateFilterHandler}
    >
      Date {dateFilterSymbol(isFilteredByDate)}
    </Styled.FilterDateButton>
  );
};
