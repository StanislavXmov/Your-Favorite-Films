import styled from "@emotion/styled";
import { colors, breakpoints, fontSizes } from "components/UI";

export const Label = styled.label`
  font-weight: bold;
  font-size: ${fontSizes.middle};
  color: ${colors.fontColorDark};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
`;
