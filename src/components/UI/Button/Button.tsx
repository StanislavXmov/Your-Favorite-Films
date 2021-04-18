import * as Styled from "./Button.styles";

type Props = {
  isDisabled: boolean;
  type: "submit" | "button";
  title: string;
};

export const Button = ({ isDisabled, title, type }: Props) => {
  return (
    <Styled.Button disabled={isDisabled} type={type}>
      {title}
    </Styled.Button>
  );
};
