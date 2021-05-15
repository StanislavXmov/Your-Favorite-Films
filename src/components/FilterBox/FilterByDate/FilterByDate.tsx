import { useState } from "react";

import * as Styled from "./FilterByDate.styles";

export const FilterByDate = () => {
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
    } else if (!isFilteredByDate) {
      setIsActive(true);
      setIsFilteredByDates(true);
    } else {
      setIsFilteredByDates(false);
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
