import React from "react";

import * as Styled from "./Content.styles";

export const Content: React.FC = ({ children }) => {
  return <Styled.Content>{children}</Styled.Content>;
};
