/*
 * Styling using styled components
 */

import styled, { css } from "styled-components";
import { SC as SCShowDetailsButton } from "components/ShowDetailsButton/styled";

const SliderWrapper = styled.div`
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`;

const SliderContainer = styled.div<{ isOpen?: boolean }>`
  display: flex;
  position: relative;

  ${(p) => {
    if (!p.isOpen) {
      return css`
        /* @desc tranform left of active items */
        :hover ${SliderItemContainer} {
          transform: translateX(-25%);
        }

        /* @desc scale item */
        ${SliderItemContainer} {
          :hover {
            transform: scale(1.5) !important;
          }
        }

        /* @desc transform right of active items */
        ${SliderItemContainer} {
          :hover ~ ${SliderItemContainer} {
            transform: translateX(25%);
          }
        }
      `;
    }
  }}
`;

const SliderRow = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
`;

export const SliderItemContainer = styled.div<{ isActive: boolean }>`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${SCShowDetailsButton.ShowDetailsButtonContainer} {
    opacity: 1;
  }
`;

export const SC = {
  SliderWrapper,
  SliderContainer,
  SliderRow,
  SliderItemContainer,
};
