import { Container } from "components";

import * as Styled from "./SearchBox.styles";

export const SearchBox = () => {
  return (
    <Styled.Section>
      <Container>
        <Styled.Form>
          <Styled.Label>Search Film</Styled.Label>
          <Styled.Input type="text" placeholder="Enter film title" />
        </Styled.Form>
      </Container>
    </Styled.Section>
  );
};
