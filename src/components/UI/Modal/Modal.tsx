import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Backdrop } from "./Backdrop";
import { ModalBody } from "./ModalBody";

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
  const hideScrollHandler = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const showScrollHandler = useCallback(() => {
    document.body.style.overflowY = "auto";
  }, []);
  useEffect(() => {
    hideScrollHandler();
    return () => {
      showScrollHandler();
    };
  }, []);
  const onCloseHandler = () => {
    onCloseModalHandler();
    setIsOpen(false);
  };
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <>
          <Backdrop onCloseModalHandler={onCloseHandler} />
          <ModalBody onCloseModalHandler={onCloseHandler}>{children}</ModalBody>
        </>
      )}
    </>,
    document.body
  );
};
