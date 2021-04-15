import { ReactNode } from "react";

import * as Styled from "./Container.styles";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>;
};
