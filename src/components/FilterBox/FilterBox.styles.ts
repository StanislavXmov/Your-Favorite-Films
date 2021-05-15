import styled from "@emotion/styled";
import { colors, breakpoints, fontSizes } from "components/UI";

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

  @media (max-width: ${breakpoints.mobile}) {
    gap: 2px;
  }
`;

type FilterDateProps = {
  active: boolean;
};

export const FilterDateButton = styled.button<FilterDateProps>`
  display: flex;
  align-items: center;
  margin: 0;
  border: 2px solid ${colors.backgroundColor};
  background-color: ${colors.fontColorLight};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${(props) =>
    props.active ? colors.fontColorDark : colors.fontColorMedium};
  font-size: ${fontSizes.middle};
  font-weight: bold;
  outline: none;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.backgroundColorLighter};
  }
`;
const Arror = styled.span`
  display: block;
  width: 16px;
  height: 12px;
  margin-left: 10px;
  background-color: ${colors.backgroundColor};
  transition: all 0.2s ease-out;
`;

export const ArrorUp = styled(Arror)`
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
`;
export const ArrorDown = styled(Arror)`
  clip-path: polygon(0 0, 50% 100%, 100% 0);
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
  padding: 9px;
  transition: all 0.2s ease-out;

  &:focus,
  &:active,
  &:hover {
    border: 2px solid ${colors.backgroundColorLighter};
  }
`;

export const LangLabel = styled.label`
  font-weight: bold;
  font-size: ${fontSizes.middle};
  color: ${colors.fontColorDark};
`;

export const LangSelect = styled.select`
  margin-left: 10px;
`;
