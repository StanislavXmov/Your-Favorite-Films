import styled from "@emotion/styled";

export const Container = styled.nav`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 10px;
  background-color: #654062;
  color: white;
  border: 3px solid black;
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.div`
  width: 93px;
  height: 30px;
  background-image: url(logo.svg);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const List = styled.ul`
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
