import React from "react";
import ShowDetailsButton from "components/ShowDetailsButton";
import Mark from "components/Mark";
import SliderContext from "./context";
import { SC } from "./styled";
import { SliderContextProps, SliderItemProps } from "./interfaces";
import styled from "styled-components";
import { TMDB_BASE_IMG_URL } from "constants/tmdb";

const SliderItem: React.FC<SliderItemProps> = ({ item, ...props }) => {
  const context = React.useContext<Partial<SliderContextProps>>(SliderContext);
  // console.log("[Item]: context", context);
  const { onSelectSlide, currentSlide, elementRef } = context;
  const isActive = currentSlide && currentSlide.id === item.id;

  // console.log("SliderItem: currentSlide", currentSlide);
  // console.log("SliderItem: item", item);
  console.log("SliderItem: isActive", isActive);

  return (
    <SC.ItemContainer
      ref={elementRef}
      isActive={isActive}
      onClick={() => onSelectSlide && onSelectSlide(item)}
      {...props}
    >
      <img src={`${TMDB_BASE_IMG_URL}${item.backdrop_path}`} alt={item.name} />
      <ShowDetailsButton />
      {isActive && <Mark />}
    </SC.ItemContainer>
  );
};

export default SliderItem;
