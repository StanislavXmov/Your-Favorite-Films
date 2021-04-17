import { ReactNode } from "react";

import { Nav, SearchBox } from "components";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <SearchBox />
      {children}
    </>
  );
};
