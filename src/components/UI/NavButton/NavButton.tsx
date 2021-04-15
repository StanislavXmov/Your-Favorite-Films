/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "components";
import * as Styled from "./NavButton.styles";

const toggleOpen = css`
  transition: all 500ms;
  opacity: 0;
  stroke-dasharray: 94;
  stroke-dashoffset: -94;
  &.active {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`;

const toggleClose = css`
  opacity: 0;
  transition: all 500ms;
  stroke-dasharray: 78;
  stroke-dashoffset: -78;
  &.active {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`;

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const NavButton = ({ isOpen, onClick }: Props) => {
  return (
    <Styled.NavButton onClick={onClick}>
      <svg
        width="39"
        height="34"
        viewBox="0 0 39 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          css={toggleOpen}
          className={!isOpen ? "active" : ""}
          d="M2 17H37M2 2H37M2 32H37"
          stroke={colors.fontColorLight}
          strokeWidth="4"
        />
        <path
          css={toggleClose}
          className={isOpen ? "active" : ""}
          d="M2 2L37 32M2 32L37 2"
          stroke={colors.fontColorLight}
          strokeWidth="4"
        />
      </svg>
    </Styled.NavButton>
  );
};
