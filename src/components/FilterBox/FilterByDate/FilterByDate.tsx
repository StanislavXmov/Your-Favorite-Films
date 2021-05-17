import { Dispatch, SetStateAction, useState } from "react";

import { Film } from "store/state";
import { FilterState } from "../FilterBox";

import * as Styled from "./FilterByDate.styles";

type Props = {
  films: Film[];
  filteredFilms: Film[];
  setFilteredFilms: (films: Film[]) => void;
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByDate = ({
  films,
  filteredFilms,
  setFilteredFilms,
  setFilteredState,
  filteredState,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isFilteredByDate, setIsFilteredByDates] = useState(false);
  const [filteredBeforeChange, setFilteredBeforeChange] = useState([
    ...filteredFilms,
  ]);

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
      if (filteredState.title || filteredState.lang) {
        setFilteredFilms([...filteredBeforeChange]);
      } else {
        setFilteredFilms([...films]);
      }
      setFilteredState({ ...filteredState, date: false });
    } else if (!isFilteredByDate) {
      setIsActive(true);
      setFilteredBeforeChange([...filteredFilms]);
      setIsFilteredByDates(true);
      const filtered = filterByUp(filteredFilms);
      setFilteredFilms([...filtered]);
      setFilteredState({ ...filteredState, date: true });
    } else {
      setIsFilteredByDates(false);
      const filtered = filterByDown(filteredFilms);
      setFilteredFilms([...filtered]);
      setFilteredState({ ...filteredState, date: true });
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
