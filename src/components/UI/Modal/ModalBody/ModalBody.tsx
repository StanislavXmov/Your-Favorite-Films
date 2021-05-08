import React from "react";

import * as Styled from "./ModalBody.styles";

type Props = {
  children: React.ReactNode;
  onCloseModalHandler: () => void;
};

export const ModalBody = ({ children, onCloseModalHandler }: Props) => {
  return (
    <Styled.Content>
      <Styled.CloseButton onClick={onCloseModalHandler}>
        &times;
      </Styled.CloseButton>
      {children}
    </Styled.Content>
  );
};
