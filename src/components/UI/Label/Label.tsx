import * as Styled from "./Label.styles";

type Props = {
  title: string;
};

export const Label = ({ title }: Props) => {
  return <Styled.Label>{title}</Styled.Label>;
};
