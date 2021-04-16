/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

interface Props {
  to: string;
  title: string;
  exact?: boolean;
  onClick?: () => void;
}

export const RouterLink = ({ to, title, exact, onClick }: Props) => {
  return (
    <NavLink
      css={css`
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        &:hover {
          color: #ccc;
        }
        &.active {
          border-bottom: 2px solid #fff;
        }
      `}
      to={to}
      activeClassName="active"
      exact={exact}
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};
