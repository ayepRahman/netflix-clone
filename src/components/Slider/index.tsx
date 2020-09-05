/**
 * Slider
 * @link - https://github.com/andrzejewsky/netflix-slider
 */

import React from "react";
import styled from "styled-components";
// import { SliderProps } from "./interface";
// import { SliderContainer } from "./styled";
import SliderItem from "./SliderItem";
import useSizeElement from "./useSizeElement";
import useSlider from "./useSlider";
import SliderButton from "components/SliderButton";
import SliderContext from "./context";
import Content from "components/Content";
import { MovieDataProps } from "./interfaces";
import { TMDB_BASE_IMG_URL } from "constants/tmdb";
import { SC } from "./styled";

// .slider {
//   display: flex;
//   position: relative;

//   &__container {
//     display: flex;
//     padding: 0 55px;
//     transition: transform 300ms ease 100ms;
//     z-index: 3;
//     width: 100%;
//   }

//   &:not(&--open) .item:hover .show-details-button {
//     opacity: 1;
//   }

//   &:not(&--open) .item:hover {
//     transform: scale(1.5) !important;
//   }
//   &:not(&--open):hover .item {
//     transform: translateX(-25%);
//   }

//   &:not(&--open) .item:hover ~ .item {
//     transform: translateX(25%);
//   }
// }

export interface SliderProps {
  children: React.ReactChild;
  activeSlide?: number;
}

// TODO: update shape
const Slider: React.FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = React.useState<MovieDataProps | null>(
    null
  );
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasPrev,
    hasNext,
  } = useSlider(width, React.Children.count(children));

  const handleSelect = (item: MovieDataProps) => {
    setCurrentSlide(item);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SC.SliderWrapper>
        <SC.SliderContainer isOpen={currentSlide != null}>
          <SC.SliderRow ref={containerRef} {...slideProps}>
            {children}
          </SC.SliderRow>
        </SC.SliderContainer>
        {hasPrev && <SliderButton onClick={handlePrev} buttonType="prev" />}
        {hasNext && <SliderButton onClick={handleNext} buttonType="next" />}
      </SC.SliderWrapper>
      {currentSlide && (
        <Content
          imgUrl={`${TMDB_BASE_IMG_URL}${currentSlide.backdrop_path}`}
          desc={currentSlide.overview}
          title={currentSlide.name || currentSlide.title}
          onClose={handleClose}
        />
      )}
    </SliderContext.Provider>
  );
};

export default Slider;
export { SliderItem };
