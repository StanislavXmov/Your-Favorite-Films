import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Props } from "./Logo";

export const Logo = styled.img<Props>`
  ${(props) => {
    if (props.size === "s") {
      return css`
        width: 93px;
        height: 30px;
      `;
    }
    if (props.size === "m") {
      return css`
        width: 133px;
        height: 43px;
      `;
    }
    return css`
      width: 241px;
      height: 78px;
    `;
  }}
`;
