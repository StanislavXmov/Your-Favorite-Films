import { useState } from "react";

import * as Styled from "./FilterByDate.styles";

export const FilterByDate = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFilteredByDate, setIsFilteredByDates] = useState<null | boolean>(
    null
  );
  const dateFilterSymbol = (isFiltered: boolean | null) => {
    if (isFiltered === null) {
      return null;
    }
    if (isFiltered) {
      return <Styled.ArrorUp />;
    }
    return <Styled.ArrorDown />;
  };
  const dateFilterHandler = () => {
    if (isFilteredByDate === null) {
      setIsFilteredByDates(true);
    } else if (isFilteredByDate) {
      setIsFilteredByDates(false);
    } else {
      setIsFilteredByDates(null);
    }
  };
  const dateFilterClassNameHandler = () => {
    if (isFilteredByDate === null) {
      return false;
    }
    return true;
  };
  return (
    <Styled.FilterDateButton
      active={dateFilterClassNameHandler()}
      type="button"
      onClick={dateFilterHandler}
    >
      Date {dateFilterSymbol(isFilteredByDate)}
    </Styled.FilterDateButton>
  );
};
