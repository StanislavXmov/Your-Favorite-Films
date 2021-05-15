import { useState } from "react";

import { FilterByDate } from "./FilterByDate";
import { FilterByTitle } from "./FilterByTitle";
import * as Styled from "./FilterBox.styles";

export const FilterBox = () => {
  return (
    <Styled.Form>
      <FilterByTitle />
      <Styled.FilterByWrapper>
        Filter By:
        <FilterByDate />
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
