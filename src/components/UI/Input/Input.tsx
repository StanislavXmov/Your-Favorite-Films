import React from "react";

import * as Styled from "./Input.styles";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password";
  placeholder: string;
  id: string;
};

export const Input = ({ id, onChange, placeholder, value, type }: Props) => {
  return (
    <Styled.Input
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};
