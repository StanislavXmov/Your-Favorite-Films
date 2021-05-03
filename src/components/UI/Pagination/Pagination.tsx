import React from "react";

import { Button } from "components/UI";

import * as Styled from "./Pagination.styles";
import { getPaginationRange } from "./utils";

type Props = {
  currentPage: number;
  maxPageAmount: number;
  onChangePage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({
  currentPage,
  maxPageAmount,
  onChangePage,
}: Props) => {
  const pageNumbersArray = getPaginationRange(0, maxPageAmount);
  const pageClickHandler = (page: number) => {
    window.scrollTo(0, 0);
    onChangePage(page);
  };

  return (
    <Styled.Pagination>
      {pageNumbersArray.map((pageNumber, pageIndex) => (
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
