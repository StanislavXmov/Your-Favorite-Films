import { useState } from "react";

import * as Styled from "./FilterBox.styles";
import { FilterByTitle } from "./FilterByTitle";

export const FilterBox = () => {
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
    <Styled.Form>
      <FilterByTitle />
      <Styled.FilterByWrapper>
        Filter By:
        <Styled.FilterDateButton
          active={dateFilterClassNameHandler()}
          type="button"
          onClick={dateFilterHandler}
        >
          Date {dateFilterSymbol(isFilteredByDate)}
        </Styled.FilterDateButton>
        <Styled.SelectWrapper>
          <Styled.LangLabel htmlFor="lang">Language</Styled.LangLabel>
          <Styled.LangSelect id="lang">
            <option defaultValue="all">All</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="de">De</option>
          </Styled.LangSelect>
        </Styled.SelectWrapper>
      </Styled.FilterByWrapper>
    </Styled.Form>
  );
};
