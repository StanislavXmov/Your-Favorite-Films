import React, { useState } from "react";

import * as Styled from "./FilterBox.styles";

export const FilterBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
      return "";
    }
    return "active";
  };
  return (
    <Styled.Form>
      <Styled.FilterInput
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Title"
        id="title"
      />
      <Styled.FilterDateButton
        className={dateFilterClassNameHandler()}
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
    </Styled.Form>
  );
};
