import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { InputBasic, colors, breakpoints, InputProps } from "components/UI";

export const SearchWrapper = styled.div`
  padding: 16px;
  background-color: ${colors.tertiaryColor};
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

export const SearchInput = styled(InputBasic)<InputProps>`
  height: 100%;
  width: 80%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SearchButtonStyle = css`
  margin-left: 10px;
`;
