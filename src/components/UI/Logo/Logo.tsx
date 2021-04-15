import * as Styled from "./Logo.styles";

import logo from "./assets/logo.svg";

export type Props = {
  size: "s" | "m" | "l";
};

export const Logo = ({ size }: Props) => {
  return <Styled.Logo src={logo} size={size} />;
};
