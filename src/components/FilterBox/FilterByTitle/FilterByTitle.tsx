import { Dispatch, SetStateAction, useState } from "react";

import { FilterState } from "../FilterBox";

import { FilterInput } from "./FilterByTitle.styles";

type Props = {
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByTitle = ({ setFilteredState, filteredState }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeHandler = (query: string) => {
    setSearchQuery(query);
    setFilteredState({ ...filteredState, title: query });
  };
  return (
    <FilterInput
      type="text"
      value={searchQuery}
      onChange={(event) => onChangeHandler(event.target.value)}
      placeholder="Title"
      id="title"
    />
  );
};
