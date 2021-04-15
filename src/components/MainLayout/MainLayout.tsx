import { ReactNode } from "react";
import { Nav } from "components";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
