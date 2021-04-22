import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LoaderWraper = styled.div`
  svg {
    width: 133px;
    height: 109px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const createCircleAnimationStyle = (
  name: string,
  length: number,
  duration: number
) => {
  return css`
    stroke-dasharray: ${length};
    stroke-dashoffset: -${length};
    animation: ${name} ${duration}s ease-in-out infinite;

    @keyframes ${name} {
      from {
        stroke-dashoffset: -${length};
      }
      to {
        stroke-dashoffset: ${length};
      }
    }
  `;
};
