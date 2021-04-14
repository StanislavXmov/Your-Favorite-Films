import { useMediaQuery } from "react-responsive";
import { Container, Logo, NavButton, breakpoints } from "components";
import * as Styled from "./Nav.styles";

export const Nav = () => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });

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
          {isTabletOrMobile && <NavButton />}
        </Styled.NavWraper>
      </Container>
    </Styled.Navigation>
  );
};
