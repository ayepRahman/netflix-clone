/*
 * Styling using styled components
 */

import styled, { css } from "styled-components";

const ShowDetailsButtonContainer = styled.button<{ isActive?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 300ms ease 100ms;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;
  z-index: 10;

  span {
    display: block;
    width: 14px;
    margin: 0 auto;
    color: white;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.5) !important;
    opacity: 1;
  }

  ${(p) =>
    p.isActive &&
    css`
      opacity: 1;
      transform: translateX(-25%);
    `}
`;

export const SC = {
  ShowDetailsButtonContainer,
};
