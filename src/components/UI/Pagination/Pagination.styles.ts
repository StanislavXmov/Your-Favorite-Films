import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "components/UI";

export const Pagination = styled.div`
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  justify-content: center;
`;

type PaginationButtonStyle = {
  currentPage: number;
  pageNumber: number;
};

export const setPaginationButtonStyle = ({
  currentPage,
  pageNumber,
}: PaginationButtonStyle) => {
  return css`
    width: 40px;
    margin: 0 10px;
    font-weight: ${pageNumber === currentPage ? "bold" : "normal"};
    color: ${pageNumber === currentPage
      ? colors.fontColorLight
      : colors.fontColorDark};
    background-color: ${pageNumber === currentPage
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
