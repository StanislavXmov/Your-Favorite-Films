import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "components";
import { Label, Button } from "components/UI";
import { searchFilms } from "store/";

import * as Styled from "./SearchBox.styles";

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isSearchQueryEmpty = searchQuery.trim();
    if (isSearchQueryEmpty) {
      dispatch(searchFilms(searchQuery));
    }
  };
  return (
    <Styled.SearchWrapper>
      <Container>
        <Styled.Form onSubmit={(event) => submitHandler(event)}>
          <Label id="title" title="Search Film" />
          <Styled.SearchInput
            id="title"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            type="text"
            placeholder="Enter film title"
          />
          <Button
            css={Styled.SearchButtonStyle}
            isDisabled={!searchQuery}
            type="submit"
            title="Search"
          />
        </Styled.Form>
      </Container>
    </Styled.SearchWrapper>
  );
};
