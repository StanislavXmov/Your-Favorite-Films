import { Container, Logo } from "components";
import * as Styled from "./Nav.styles";

export const Nav = () => {
  return (
    <Styled.Navigation>
      <Container>
        <Styled.NavWraper>
          <Logo />
          <Styled.List>
            <Styled.Item>
              <Styled.ItemLink href="/" title="Home">
                Home
              </Styled.ItemLink>
            </Styled.Item>
            <Styled.Item>
              <Styled.ItemLink href="/" title="Favorites">
                Favorites
              </Styled.ItemLink>
            </Styled.Item>
          </Styled.List>
        </Styled.NavWraper>
      </Container>
    </Styled.Navigation>
  );
};
