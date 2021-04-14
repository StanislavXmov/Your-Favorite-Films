import { useMediaQuery } from "react-responsive";
import { Container, Logo, NavButton, breakpoints } from "components";
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
          <Logo />
          <Styled.List isOpen={isOpen} isTabletOrMobile={isTabletOrMobile}>
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
          {isTabletOrMobile && (
            <NavButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          )}
        </Styled.NavWraper>
      </Container>
    </Styled.Navigation>
  );
};
