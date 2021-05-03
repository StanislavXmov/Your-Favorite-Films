import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { breakpoints, colors } from "components/UI";

export const Card = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.logoGrey};
  color: ${colors.fontColorDark};
  border: 3px solid ${colors.fontColorDark};
  border-radius: 6px;

  svg {
    height: 300px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 24%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    gap: 10px;
    justify-content: space-between;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;
export const CardTitle = styled.h3`
  margin: 4px 0;
  color: ${colors.fontColorDark};
`;
export const CardDesc = styled.p`
  margin: 4px 0;
  color: ${colors.fontColorDark};
`;

export const CardButtonStyle = css`
  &:focus,
  &:active {
    border: 2px solid ${colors.backgroundColor};
    background-color: ${colors.fontColorLight};
    color: ${colors.fontColorDark};
  }
  &:hover {
    border: 2px solid ${colors.logoGrey};
    background-color: ${colors.backgroundColorLighter};
    color: ${colors.fontColorLight};
  }
`;
