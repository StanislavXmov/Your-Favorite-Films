import React from "react";

import { Button } from "components/UI";

import * as Styled from "./Pagination.styles";

type Props = {
  current: number;
  pages: number[];
  changePage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ current, pages, changePage }: Props) => {
  return (
    <Styled.Pagination>
      {/* <Button title={"1"} type="button" isDisabled={false} /> */}
      {pages.map((p) => (
        <Button
          css={Styled.setPaginationButtonStyle(current, p)}
          key={p}
          title={`${p + 1}`}
          type="button"
          isDisabled={false}
          onClick={() => changePage(p)}
        />
      ))}
    </Styled.Pagination>
  );
};
