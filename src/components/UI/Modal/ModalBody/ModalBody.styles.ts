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
  background-color: ${colors.logoGrey};
  color: ${colors.fontColorDark};
  border: 3px solid ${colors.fontColorDark};
  border-radius: 6px;
  overflow-y: auto;
  /* @media (max-width: ${breakpoints.laptop}) {
    
  } */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
    height: auto;
  }
`;
