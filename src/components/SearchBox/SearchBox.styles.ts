import styled from "@emotion/styled";
import { colors, breakpoints } from "components/UI";

export const Section = styled.section`
  padding: 16px;
  background-color: ${colors.logoGrey};
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;
