import styled from "@emotion/styled";
import { colors, breakpoints } from "components/UI";

export const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background-color: ${colors.tertiaryColor};

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

export const FilterByWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
    flex-direction: column;
    margin: 0 auto;
  }
`;
