import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, breakpoints, fontSizes } from "components/UI";

type ButtonProps = {
  css?: SerializedStyles;
};

export const Button = styled.button<ButtonProps>`
  margin: 0;
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border: 2px solid ${colors.backgroundColor};
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: ${fontSizes.small};
  font-weight: bold;
  outline: none;
  padding: 10px;
  cursor: pointer;
  ${(props) => props.css}

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

export const SearchButton = styled(Button)`
  margin-left: 10px;
`;
