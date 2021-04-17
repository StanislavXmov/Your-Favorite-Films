import * as Styled from "./Label.styles";

type Props = {
  title: string;
  id: string;
};

export const Label = ({ id, title }: Props) => {
  return <Styled.Label htmlFor={id}>{title}</Styled.Label>;
};
