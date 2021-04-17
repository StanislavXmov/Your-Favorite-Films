import styled from "@emotion/styled";
import { colors } from "components/UI";

export const Section = styled.section`
  padding: 16px;
  background-color: ${colors.logoGrey};
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;
export const Input = styled.input`
  box-sizing: border-box;
  background-color: var(--search-box-bg, white);
  border: 2px solid ${colors.backgroundColor};
  border-radius: 10px;
  color: black;
  font-size: 16px;
  height: 100%;
  outline: none;
  padding: 10px;
  position: relative;
  width: 80%;

  &:focus,
  &:active {
    border: 2px solid ${colors.backgroundColorLighter};
  }
`;

export const Button = styled.button`
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.logoGrey};
`;
