import React, { useState } from "react";

import { Container } from "components";
import { Label, SearchButton } from "components/UI";

import * as Styled from "./SearchBox.styles";

export const SearchBox = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim()) {
      console.log(title);
    }
  };
  return (
    <Styled.Section>
      <Container>
        <Styled.Form onSubmit={(event) => submitHandler(event)}>
          <Label id="title" title="Search Film" />
          <Styled.SearchInput
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter film title"
          />
          <SearchButton isDisabled={!title} type="submit" title="Search" />
        </Styled.Form>
      </Container>
    </Styled.Section>
  );
};
