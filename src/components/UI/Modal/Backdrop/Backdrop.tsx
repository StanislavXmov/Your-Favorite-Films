import React from "react";

import * as Styled from "./Backdrop.styles";

type Props = {
  onCloseModalHandler: () => void;
};

export const Backdrop = ({ onCloseModalHandler }: Props) => {
  return <Styled.Backdrop onClick={onCloseModalHandler} />;
};
