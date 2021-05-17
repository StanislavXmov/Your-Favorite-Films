import { Dispatch, SetStateAction, useState } from "react";

import { FilterState } from "../FilterBox";

import * as Styled from "./FilterByDate.styles";

type Props = {
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByDate = ({ setFilteredState, filteredState }: Props) => {
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
  const dateFilterHandler = () => {
    if (!isFilteredByDate && isActive) {
      setIsActive(false);
      setFilteredState({ ...filteredState, date: null });
    } else if (!isFilteredByDate) {
      setIsActive(true);
      setIsFilteredByDates(true);
      setFilteredState({ ...filteredState, date: true });
    } else {
      setIsFilteredByDates(false);
      setFilteredState({ ...filteredState, date: false });
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
