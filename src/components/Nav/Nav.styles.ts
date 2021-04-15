import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { colors } from "../UI";

export const Navigation = styled.nav`
  background-color: ${colors.backgroundColor};
  color: ${colors.fontColorLight};
  border: 3px solid black;
  border-radius: 0 0 6px 6px;
`;

export const NavWraper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 10px;
  color: ${colors.fontColorLight};

  /* @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`;

export const Logo = styled.div`
  width: 93px;
  height: 30px;
  background-image: url(logo.svg);
  background-repeat: no-repeat;
  background-size: contain;
`;

interface ListProps {
  isTabletOrMobile: boolean;
  isOpen: boolean;
  children?: ReactNode[];
}

export const List = styled.ul<ListProps>`
  display: grid;
  grid-gap: 30px;
  grid-auto-flow: column;
  margin: 0;
  ${(props) => {
    if (props.isTabletOrMobile) {
      return props.isTabletOrMobile && !props.isOpen
        ? css`
            display: none;
          `
        : css`
            position: absolute;
            top: -3px;
            left: -3px;
            width: 66%;
            grid-auto-flow: row;
            padding: 16px;
            background-color: ${colors.backgroundColorLighter};
            border: 3px solid black;
            border-radius: 6px;
            & a {
              color: ${colors.fontColorLight};
              font-weight: bold;
            }
          `;
    }
    return "";
  }}
`;

export const Item = styled.li`
  display: inline;
  text-align: center;
`;
export const ItemLink = styled.a`
  color: ${colors.fontColorLight};
  text-decoration: none;
  font-size: 18px;
`;
