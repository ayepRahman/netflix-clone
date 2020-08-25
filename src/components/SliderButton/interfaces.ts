import { ButtonEnum } from "./enums";

export type SliderButtonType = keyof typeof ButtonEnum;

export interface SliderButtonProps {
  onClick: () => void;
  buttonType: SliderButtonType;
}

export interface SliderButtonStyleProps {
  buttonType: SliderButtonType;
}
