import React from "react";

import * as Styled from "./Input.styles";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
};

export const Input = ({ onChange, placeholder, value, type }: Props) => {
  return (
    <Styled.Input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};
