import styled from "@emotion/styled";
import { breakpoints } from "components/UI/theme";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 0;
  @media (max-width: ${breakpoints.tablet}) {
    gap: 10px;
  }
`;
