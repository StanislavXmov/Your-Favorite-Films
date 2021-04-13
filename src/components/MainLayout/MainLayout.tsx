import { FC } from "react";
import { Nav } from "components";

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
