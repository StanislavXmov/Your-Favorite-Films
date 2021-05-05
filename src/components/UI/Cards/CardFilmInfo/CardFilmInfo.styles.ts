import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { breakpoints, colors } from "components/UI";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;

  svg {
    height: 300px;
    margin: 0 auto;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
    margin: 0 auto;
    flex-direction: column;
  }
`;
export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const Date = styled.div`
  padding: 6px 0;
  color: ${colors.fontColorDark};
  border-bottom: 2px solid ${colors.logoOrange};
`;
export const Language = styled.div`
  padding: 6px 0;
  color: ${colors.fontColorDark};
  border-bottom: 2px solid ${colors.logoOrange};
`;
export const Rating = styled.div`
  padding: 6px 0;
  color: ${colors.fontColorDark};
  border-bottom: 2px solid ${colors.logoOrange};
`;

export const CardTitle = styled.h2`
  padding: 4px 0;
  color: ${colors.fontColorDark};
  border-bottom: 4px solid ${colors.logoOrange};
`;

export const CardDesc = styled.p`
  margin: 4px 0;
  color: ${colors.fontColorDark};
`;

export const AddToFavoriteButtonStyle = css`
  border: 2px solid ${colors.logoYellow};
  background-color: ${colors.fontColorLight};

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.logoGrey};
    background-color: ${colors.logoYellow};
    color: ${colors.fontColorLight};
  }
`;
