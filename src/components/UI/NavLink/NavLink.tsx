/** @jsxImportSource @emotion/react */
import { NavLink as Link } from "react-router-dom";
import { css } from "@emotion/react";

interface Props {
  to: string;
  title: string;
  exact?: boolean;
  onClick?: () => void;
}

export const NavLink = ({ to, title, exact, onClick }: Props) => {
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
      onClick={onClick}
    >
      {title}
    </Link>
  );
};
