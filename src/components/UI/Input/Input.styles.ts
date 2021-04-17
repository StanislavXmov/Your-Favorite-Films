import styled from "@emotion/styled";
import { colors, breakpoints, fontSizes } from "components/UI";

export const Input = styled.input`
  box-sizing: border-box;
  border: 2px solid ${colors.backgroundColor};
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: ${fontSizes.small};
  height: 100%;
  outline: none;
  padding: 10px;
  position: relative;
  width: 80%;

  &:focus,
  &:active {
    border: 2px solid ${colors.backgroundColorLighter};
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
