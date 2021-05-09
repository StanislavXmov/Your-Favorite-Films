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
    width: 100%;
    height: 300px;
    margin: 0 auto;
  }
`;

export const CardHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
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

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const FilmInfo = styled.div`
  padding: 6px 0;
  color: ${colors.fontColorDark};
  border-bottom: 2px solid ${colors.primaryColor};
`;
export const FilmInfoTitle = styled.span`
  font-weight: bold;
  color: ${colors.fontColorDark};
`;

export const CardTitle = styled.h2`
  padding: 4px 0;
  color: ${colors.fontColorDark};
  border-bottom: 4px solid ${colors.primaryColor};
`;

export const CardDesc = styled.p`
  margin: 4px 0;
  color: ${colors.fontColorDark};
`;

export const AddToFavoriteButton = css`
  border: 2px solid ${colors.secondaryColor};
  background-color: ${colors.fontColorLight};

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.tertiaryColor};
    background-color: ${colors.secondaryColor};
    color: ${colors.fontColorLight};
  }
`;
