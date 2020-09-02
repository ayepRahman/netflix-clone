/*
 * Styling using styled components
 */

import styled from "styled-components";

const MarkContainer = styled.div`
  box-sizing: border-box;
  border: solid 4px #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 4;

  &:before,
  &:after {
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    top: 100%;
    left: 50%;
    margin-left: -13px;
    border-style: solid;
    border-width: 7px 13px 0 13px;
  }

  &:before {
    border-color: rgba(0, 0, 0, 0.15) transparent transparent transparent;
    margin-top: 5px;
  }

  &:after {
    margin-top: 4px;
    border-color: #fff transparent transparent transparent;
  }
`;

MarkContainer.displayName = "MarkContainer";

export const SC = {
  MarkContainer,
};
