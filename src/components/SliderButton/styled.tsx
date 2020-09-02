/*
 * Styling using styled components
 */

import styled, { css } from "styled-components";
import { SliderButtonType, SliderButtonStyleProps } from "./interfaces";
import { ButtonEnum } from "./enums";

export const SliderButtonContainer = styled.button<SliderButtonStyleProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  margin: 40px 0;
  z-index: 4;
  color: white;

  &:hover {
    cursor: pointer;
  }

  ${(p) =>
    p.buttonType === ButtonEnum.next
      ? css`
          svg {
            transform: rotateZ(180deg);
          }
          right: 0;
        `
      : css`
          svg {
            transform: rotateZ(0deg);
          }
          right: unset;
        `}
`;
