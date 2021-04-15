/** @jsxImportSource @emotion/react */

import { colors } from "components";

import * as Styled from "./NavButton.styles";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const NavBurger = ({ isOpen, onClick }: Props) => {
  return (
    <Styled.NavButton onClick={onClick}>
      <svg viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          css={Styled.toggleOpen}
          className={!isOpen ? "active" : ""}
          d="M2 17H37M2 2H37M2 32H37"
          stroke={colors.fontColorLight}
          strokeWidth="4"
        />
        <path
          css={Styled.toggleClose}
          className={isOpen ? "active" : ""}
          d="M2 2L37 32M2 32L37 2"
          stroke={colors.fontColorLight}
          strokeWidth="4"
        />
      </svg>
    </Styled.NavButton>
  );
};
