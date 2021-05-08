import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.9);
  backdrop-filter: blur(1px);
  opacity: 1;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1) 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;
