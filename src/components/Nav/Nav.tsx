import { Container, List, Item, ItemLink, Logo } from "./Nav.styles";

export const Nav = () => {
  return (
    <Container>
      <Logo />
      <List>
        <Item>
          <ItemLink href="/">Home</ItemLink>
        </Item>
        <Item>
          <ItemLink href="/">Favorites</ItemLink>
        </Item>
      </List>
    </Container>
  );
};
