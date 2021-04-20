import { SerializedStyles } from "@emotion/react";
import * as Styled from "./Button.styles";

type Props = {
  css?: SerializedStyles;
  isDisabled: boolean;
  type: "submit" | "button";
  title: string;
};

export const Button = ({ css, isDisabled, title, type }: Props) => {
  return (
    <Styled.Button css={css} disabled={isDisabled} type={type}>
      {title}
    </Styled.Button>
  );
};
