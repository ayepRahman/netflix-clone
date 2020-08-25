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

  ${(p) =>
    p.buttonType === ButtonEnum.next
      ? css`
          span {
            transform: rotateZ(-90deg);
          }
        `
      : css`
          span {
            transform: rotateZ(90deg);
          }
        `}
`;
