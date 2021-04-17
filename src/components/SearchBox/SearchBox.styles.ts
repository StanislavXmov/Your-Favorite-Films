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
  color: ${colors.fontColorDark};
`;
export const Input = styled.input`
  box-sizing: border-box;
  border: 2px solid ${colors.backgroundColor};
  border-radius: 10px;
  color: ${colors.fontColorDark};
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
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border: 2px solid ${colors.backgroundColor};
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  outline: none;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.backgroundColorLighter};
    color: ${colors.fontColorLightDark};
  }
`;
