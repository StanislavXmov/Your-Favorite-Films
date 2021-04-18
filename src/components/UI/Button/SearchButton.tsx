import * as Styled from "./Button.styles";

type Props = {
  isDisabled: boolean;
  type: "submit" | "button";
  title: string;
};

export const SearchButton = ({ isDisabled, title, type }: Props) => {
  return (
    <Styled.SearchButton disabled={isDisabled} type={type}>
      {title}
    </Styled.SearchButton>
  );
};
