import styled from "@emotion/styled";
import { colors, breakpoints, fontSizes } from "components/UI";

export const Button = styled.button`
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border: 2px solid ${colors.backgroundColor};
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: ${fontSizes.small};
  font-weight: bold;
  height: 100%;
  outline: none;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.backgroundColorLighter};
    color: ${colors.fontColorLightDark};
  }

  &:disabled {
    border: 2px solid ${colors.fontColorLightDark};
    color: ${colors.fontColorLightDark};
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40%;
  }
`;
