import { useState } from "react";

import { FilterByDate } from "./FilterByDate";
import { FilterByTitle } from "./FilterByTitle";
import { FilterByLang } from "./FilterByLang";
import * as Styled from "./FilterBox.styles";

export const FilterBox = () => {
  return (
    <Styled.Form>
      <FilterByTitle />
      <Styled.FilterByWrapper>
        Filter By:
        <FilterByDate />
        <FilterByLang />
      </Styled.FilterByWrapper>
    </Styled.Form>
  );
};
