import { useState } from "react";

import { Container } from "components";

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
          <Styled.Label>Search Film</Styled.Label>
          <Styled.Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter film title"
          />
        </Styled.Form>
      </Container>
    </Styled.Section>
  );
};
