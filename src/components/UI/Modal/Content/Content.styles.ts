import styled from "@emotion/styled";
import { colors } from "components/UI/theme";

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 90%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.logoGrey};
  color: ${colors.fontColorDark};
  border: 3px solid ${colors.fontColorDark};
  border-radius: 6px;
`;
