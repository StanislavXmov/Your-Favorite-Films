import { useState } from "react";

import { FilterInput } from "./FilterByTitle.styles";

export const FilterByTitle = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <FilterInput
      type="text"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Title"
      id="title"
    />
  );
};
