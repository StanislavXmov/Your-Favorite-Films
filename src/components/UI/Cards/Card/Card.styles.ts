import styled from "@emotion/styled";
import { breakpoints, colors } from "components/UI";

export const Card = styled.div`
  width: 40%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: ${colors.logoGrey};
  color: ${colors.fontColorDark};
  border: 3px solid black;
  border-radius: 6px;
  @media (min-width: ${breakpoints.laptop}) {
    width: 24%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    margin: 5px;
    justify-content: space-between;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;
export const CardTitle = styled.h3`
  margin: 4px 0;
  color: ${colors.fontColorDark};
`;
export const CardDesc = styled.p`
  margin: 4px 0;
  color: ${colors.fontColorDark};
`;
