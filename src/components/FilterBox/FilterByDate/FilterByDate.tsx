import { Dispatch, SetStateAction, useState } from "react";

import { FilterState } from "../FilterBox";

import * as Styled from "./FilterByDate.styles";

type Props = {
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByDate = ({ setFilteredState, filteredState }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isIncreaseDate, setIsIncreaseDate] = useState(false);
  const [isDecreaseDate, setIsDecreaseDate] = useState(false);

  const getFilterSymbol = () => {
    if (!isActive) {
      return null;
    }
    if (isIncreaseDate) {
      return <Styled.ArrorUp />;
    }
    if (isDecreaseDate) {
      return <Styled.ArrorDown />;
    }
    return null;
  };
  const dateFilterHandler = () => {
    if (isDecreaseDate && !isIncreaseDate && isActive) {
      setIsActive(false);
      setFilteredState({ ...filteredState, date: null });
    } else if (!isIncreaseDate) {
      setIsActive(true);
      setIsIncreaseDate(true);
      setIsDecreaseDate(false);
      setFilteredState({ ...filteredState, date: "increase" });
    } else if (!isDecreaseDate) {
      setIsIncreaseDate(false);
      setIsDecreaseDate(true);
      setFilteredState({ ...filteredState, date: "decrease" });
    }
  };
  return (
    <Styled.FilterDateButton
      active={isActive}
      type="button"
      onClick={dateFilterHandler}
    >
      Date {getFilterSymbol()}
    </Styled.FilterDateButton>
  );
};
