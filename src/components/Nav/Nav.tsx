import { useMediaQuery } from "react-responsive";
import { Container, Logo, NavButton, NavLink, breakpoints } from "components";
import { useEffect, useState } from "react";
import * as Styled from "./Nav.styles";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });
  useEffect(() => {
    if (!isTabletOrMobile) {
      setIsOpen(isTabletOrMobile);
    }
  }, [isTabletOrMobile]);

  return (
    <Styled.Navigation>
      <Container>
        <Styled.NavWraper>
          <Logo size="s" />
          <Styled.List isOpen={isOpen} isTabletOrMobile={isTabletOrMobile}>
            <Styled.Item>
              <NavLink
                to="/"
                title="Home"
                exact
                onClick={() => setIsOpen(false)}
              />
            </Styled.Item>
            <Styled.Item>
              <NavLink
                to="/favorites"
                title="Favorites"
                onClick={() => setIsOpen(false)}
              />
            </Styled.Item>
          </Styled.List>
          {isTabletOrMobile && (
            <NavButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          )}
        </Styled.NavWraper>
      </Container>
    </Styled.Navigation>
  );
};
