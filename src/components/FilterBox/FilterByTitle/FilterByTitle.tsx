import { useState } from "react";

import { Film } from "store/state";

import { FilterInput } from "./FilterByTitle.styles";

type Props = {
  films: Film[];
  filteredFilms: Film[];
  setFilteredFilms: (films: Film[]) => void;
};

export const FilterByTitle = ({
  films,
  filteredFilms,
  setFilteredFilms,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeHandler = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredFilms([...films]);
    } else {
      const filtered = films.filter(({ title }) =>
        title.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredFilms([...filtered]);
    }
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
