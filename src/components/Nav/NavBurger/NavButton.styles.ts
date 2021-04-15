import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const NavButton = styled.button`
  position: absolute;
  right: 10px;
  width: 39px;
  height: 34px;
  margin: 0;
  padding: 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const toggleOpen = css`
  transition: all 500ms;
  opacity: 0;
  stroke-dasharray: 94;
  stroke-dashoffset: -94;
  &.active {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`;

export const toggleClose = css`
  opacity: 0;
  transition: all 500ms;
  stroke-dasharray: 78;
  stroke-dashoffset: -78;
  &.active {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`;
