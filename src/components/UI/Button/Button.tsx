import * as Styled from "./Button.styles";

type Props = {
  disabled: boolean;
  type: "submit" | "button";
  title: string;
};

export const Button = ({ disabled, title, type }: Props) => {
  return (
    <Styled.Button disabled={disabled} type={type}>
      {title}
    </Styled.Button>
  );
};
