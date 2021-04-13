import { ReactNode } from "react";
import { Nav } from "components";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
