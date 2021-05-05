import React from "react";

import * as Styled from "./Backdrop.styles";

export const Backdrop: React.FC = ({ children }) => {
  return <Styled.Backdrop>{children}</Styled.Backdrop>;
};
