import styled from "@emotion/styled";
import { breakpoints, colors } from "components/UI/theme";

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
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.logoGrey};
  color: ${colors.fontColorDark};
  border: 3px solid ${colors.fontColorDark};
  border-radius: 6px;
  overflow-y: auto;
  @media (max-width: ${breakpoints.laptop}) {
    left: 30%;
    transform: translate(-20%, -50%);
  }
  @media (max-width: ${breakpoints.tablet}) {
    left: 5%;
    max-width: 90%;
    height: auto;
    transform: translate(0%, -50%);
  }
`;
