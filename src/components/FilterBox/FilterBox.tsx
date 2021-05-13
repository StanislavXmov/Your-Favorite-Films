import { Label } from "components/UI";
import React, { useState } from "react";

import * as Styled from "./FilterBox.styles";

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
  return (
    <Styled.Form>
      <Styled.FilterInput
        type="text"
        value=""
        onChange={() => {
          console.log();
        }}
        placeholder="Title"
        id="title"
      />
      <Styled.FilterDateButton type="button" onClick={dateFilterHandler}>
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
