import React from "react";

import { Backdrop } from "./Backdrop";
import { Content } from "./Content";

export const Modal = () => {
  return (
    <Backdrop>
      <Content>Hello</Content>
    </Backdrop>
  );
};
