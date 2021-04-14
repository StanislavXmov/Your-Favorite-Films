import styled from "@emotion/styled";
import { ReactNode } from "react";
import { colors } from "../UI";

export const Navigation = styled.nav`
  background-color: ${colors.backgroundColor};
  color: ${colors.white};
  border: 3px solid black;
  border-radius: 0 0 6px 6px;
`;

export const NavWraper = styled.nav`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 10px;
  color: ${colors.white};

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
`;

export const Item = styled.li`
  display: inline;
`;
export const ItemLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
`;
