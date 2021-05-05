import React from "react";
import ReactDOM from "react-dom";

import { Backdrop } from "./Backdrop";
import { Content } from "./Content";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ children, open, onClose }: Props) => {
  return ReactDOM.createPortal(
    <>
      {open && (
        <>
          <Backdrop />
          <Content>{children}</Content>
        </>
      )}
    </>,
    document.body
  );
};
