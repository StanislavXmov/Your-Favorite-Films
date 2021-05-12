import styled from "@emotion/styled";
import { breakpoints, colors } from "components/UI/theme";

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  max-height: 90%;
  width: 600px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.tertiaryColor};
  color: ${colors.fontColorDark};
  border: 3px solid ${colors.fontColorDark};
  border-radius: 6px;
  overflow-y: auto;
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
    height: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: 30px;
  font-weight: bold;
  outline: none;
  padding: 0 8px;
  cursor: pointer;
  border: 2px solid ${colors.secondaryColor};
  background-color: ${colors.fontColorLight};
  transition: all 0.2s ease-out;
  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.tertiaryColor};
    background-color: ${colors.secondaryColor};
    color: ${colors.fontColorLight};
  }
`;
