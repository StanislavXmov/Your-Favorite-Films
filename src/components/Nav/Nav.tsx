import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import { Container } from "components";
import { Logo, RouterLink, breakpoints } from "../UI";

import { NavButton } from "./NavButton";

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
              <RouterLink
                to="/"
                title="Home"
                exact
                onClick={() => setIsOpen(false)}
              />
            </Styled.Item>
            <Styled.Item>
              <RouterLink
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
