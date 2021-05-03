import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "components/UI";

export const Pagination = styled.div`
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  justify-content: center;
`;

export const setPaginationButtonStyle = (currentPage: number, page: number) => {
  return css`
    width: 40px;
    margin: 0 10px;
    font-weight: ${page === currentPage ? "bold" : "normal"};
    color: ${page === currentPage
      ? colors.fontColorLight
      : colors.fontColorDark};
    background-color: ${page === currentPage
      ? colors.backgroundColorLighter
      : colors.logoGrey};
    &:focus,
    &:active,
    &:hover {
      border: 2px solid ${colors.backgroundColorLighter};
      color: ${colors.fontColorLight};
    }
  `;
};
