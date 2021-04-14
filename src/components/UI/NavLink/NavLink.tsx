/** @jsxImportSource @emotion/react */
import { NavLink as Link } from "react-router-dom";
import { css } from "@emotion/react";

interface Props {
  to: string;
  title: string;
  exact?: boolean;
}

export const NavLink = ({ to, title, exact }: Props) => {
  return (
    <Link
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
    >
      {title}
    </Link>
  );
};
