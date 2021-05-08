import React from "react";

import * as Styled from "./ModalBody.styles";

export const Content: React.FC = ({ children }) => {
  return (
    <Styled.Content>
      <Styled.CloseButton>&times;</Styled.CloseButton>
      {children}
    </Styled.Content>
  );
};
