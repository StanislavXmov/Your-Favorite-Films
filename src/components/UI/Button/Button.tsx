import { SerializedStyles } from "@emotion/react";
import * as Styled from "./Button.styles";

type Props = {
  css?: SerializedStyles;
  isDisabled: boolean;
  type: "submit" | "button";
  title: string;
  onClick?: () => void;
};

export const Button = ({ css, isDisabled, title, type, onClick }: Props) => {
  return (
    <Styled.Button
      css={css}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {title}
    </Styled.Button>
  );
};
