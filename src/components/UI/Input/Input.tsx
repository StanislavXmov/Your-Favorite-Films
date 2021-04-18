import React from "react";

import * as Styled from "./Input.styles";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password";
  placeholder: string;
  id: string;
};

export const Input = (props: Props) => {
  const { id, onChange, placeholder, value, type } = props;
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
