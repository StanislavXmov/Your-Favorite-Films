import styled from "@emotion/styled";
import { breakpoints } from "components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 720px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: 1140px;
  }
`;
