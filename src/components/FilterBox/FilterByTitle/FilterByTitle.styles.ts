import styled from "@emotion/styled";
import { InputBasic, breakpoints, InputProps } from "components/UI";

export const FilterInput = styled(InputBasic)<InputProps>`
  height: 100%;
  width: 50%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 0;
  }
`;
