import styled from "@emotion/styled";
import {
  InputBasic,
  colors,
  breakpoints,
  InputProps,
  fontSizes,
} from "components/UI";

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

export const FilterInput = styled(InputBasic)<InputProps>`
  height: 100%;
  width: 50%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const FilterDateButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${colors.fontColorMedium};
  font-size: ${fontSizes.middle};
  font-weight: bold;
  outline: none;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &.active {
    color: ${colors.fontColorDark};
  }

  &:disabled {
    border: 2px solid ${colors.fontColorMedium};
    background-color: ${colors.fontColorLight};
    color: ${colors.fontColorMedium};
    cursor: not-allowed;
  }
`;

export const ArrorUp = styled.span`
  display: block;
  width: 16px;
  height: 12px;
  margin-left: 10px;
  background-color: ${colors.backgroundColor};
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  transition: all 0.2s ease-out;
`;
export const ArrorDown = styled.span`
  display: block;
  width: 16px;
  height: 12px;
  margin-left: 10px;
  background-color: ${colors.backgroundColor};
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  transition: all 0.2s ease-out;
`;

export const SelectWrapper = styled.div`
  display: flex;
  margin: 0;
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${colors.fontColorDark};
  font-size: ${fontSizes.small};
  font-weight: bold;
  outline: none;
  padding: 10px;
`;

export const LangLabel = styled.label`
  font-weight: bold;
  font-size: ${fontSizes.middle};
  color: ${colors.fontColorDark};
`;

export const LangSelect = styled.select`
  margin-left: 10px;
`;
