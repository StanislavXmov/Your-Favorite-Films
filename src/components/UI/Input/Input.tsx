import React from "react";

import * as Styled from "./Input.styles";

export type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password";
  placeholder: string;
  id: string;
};

export const Input = (props: InputProps) => {
  const { id, onChange, placeholder, value, type } = props;
  return (
    <Styled.InputBasic
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};
