import React from "react";

import * as Styled from "./FilterByLang.styles";

export const FilterByLang = () => {
  return (
    <Styled.SelectWrapper>
      <Styled.LangLabel htmlFor="lang">Language</Styled.LangLabel>
      <Styled.LangSelect id="lang">
        <option defaultValue="all">All</option>
        <option value="en">En</option>
        <option value="ru">Ru</option>
        <option value="de">De</option>
      </Styled.LangSelect>
    </Styled.SelectWrapper>
  );
};
