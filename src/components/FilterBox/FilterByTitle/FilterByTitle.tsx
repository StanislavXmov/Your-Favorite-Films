import { Dispatch, SetStateAction, useState } from "react";

import { Film } from "store/state";
import { FilterState } from "../FilterBox";

import { FilterInput } from "./FilterByTitle.styles";

type Props = {
  films: Film[];
  filteredFilms: Film[];
  setFilteredFilms: (films: Film[]) => void;
  setFilteredState: Dispatch<SetStateAction<FilterState>>;
  filteredState: FilterState;
};

export const FilterByTitle = ({
  films,
  filteredFilms,
  setFilteredFilms,
  setFilteredState,
  filteredState,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeHandler = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      if (filteredState.date || filteredState.lang) {
        setFilteredFilms([...filteredFilms]);
      } else {
        setFilteredFilms([...films]);
      }
      setFilteredState({ ...filteredState, title: false });
    } else {
      if (filteredState.date || filteredState.lang) {
        const filtered = filteredFilms.filter(({ title }) =>
          title.toLowerCase().startsWith(query.toLowerCase())
        );
        setFilteredFilms([...filtered]);
      } else {
        const filtered = films.filter(({ title }) =>
          title.toLowerCase().startsWith(query.toLowerCase())
        );
        setFilteredFilms([...filtered]);
      }
      setFilteredState({ ...filteredState, title: true });
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
