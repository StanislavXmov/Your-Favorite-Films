import React from "react";

import { Button } from "components/UI";

import * as Styled from "./Pagination.styles";

type Props = {
  currentPage: number;
  pages: number[];
  changePage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ currentPage, pages, changePage }: Props) => {
  const pageClickHandler = (page: number) => {
    window.scrollTo(0, 0);
    changePage(page);
  };

  return (
    <Styled.Pagination>
      {pages.map((pageNumber, pageIndex) => (
        <Button
          css={Styled.setPaginationButtonStyle(currentPage, pageNumber)}
          key={pageNumber}
          title={`${pageIndex + 1}`}
          type="button"
          isDisabled={false}
          onClick={() => pageClickHandler(pageNumber)}
        />
      ))}
    </Styled.Pagination>
  );
};
