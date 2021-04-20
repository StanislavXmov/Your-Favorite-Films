import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { css } from "@emotion/react";

import { Container } from "components";
import { Label, Button } from "components/UI";
import { searchFilms } from "store/";

import * as Styled from "./SearchBox.styles";

export const SearchBox = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim()) {
      dispatch(searchFilms(title));
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
          <Button
            css={css`
              margin-left: 10px;
            `}
            isDisabled={!title}
            type="submit"
            title="Search"
          />
        </Styled.Form>
      </Container>
    </Styled.Section>
  );
};
