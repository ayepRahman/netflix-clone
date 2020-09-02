/**
 * SliderButton
 */

import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { SliderButtonProps } from "./interfaces";
import { SliderButtonContainer } from "./styled";

// TODO: write test case
const SliderButton: React.FC<SliderButtonProps> = ({ onClick, buttonType }) => {
  return (
    <SliderButtonContainer onClick={onClick} buttonType={buttonType}>
      <span>
        <ArrowBackIosIcon />
      </span>
    </SliderButtonContainer>
  );
};

export default SliderButton;
