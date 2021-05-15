import styled from "@emotion/styled";
import { colors, breakpoints, fontSizes } from "components/UI";

export const SelectWrapper = styled.div`
  display: flex;
  margin: 0;
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: ${fontSizes.small};
  font-weight: bold;
  outline: none;
  padding: 9px;
  transition: all 0.2s ease-out;

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.backgroundColorLighter};
  }
`;

export const LangLabel = styled.label`
  font-weight: bold;
  font-size: ${fontSizes.middle};
  color: ${colors.fontColorDark};
`;

export const LangSelect = styled.select`
  margin-left: 10px;
`;
