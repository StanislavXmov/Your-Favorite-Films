import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Backdrop } from "./Backdrop";
import { Content } from "./Content";

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  onCloseModalHandler: () => void;
};

export const Modal = ({
  children,
  isOpenModal,
  onCloseModalHandler,
}: Props) => {
  const [isOpen, setIsOpen] = useState(isOpenModal);
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <>
          <Backdrop
            onCloseModalHandler={() => {
              onCloseModalHandler();
              setIsOpen(false);
            }}
          />
          <Content>{children}</Content>
        </>
      )}
    </>,
    document.body
  );
};
