/**
 * Slider
 * @link - https://github.com/andrzejewsky/netflix-slider/blob/master/src/components/NetflixSlider/context.js`
 */

import React from "react";
import styled from "styled-components";
import { SliderProps } from "./interface";
import { SliderContainer } from "./styled";
import SliderItem from "./SliderItem";
import useSizeElement from "./useSizeElement";
import useSlider from "./useSlider";

export interface SliderProps {
  children: React.ReactChild;
  activeSlide?: number;
}
// TODO: update shape
const Slider: React.FC<{}> = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = React.useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSlider(width, React.Children.count(children));

  const handleSelect = (movie) => {
    setCurrentSlide(movie);
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
      <SliderWrapper>
        <div className={cx("slider", { "slider--open": currentSlide != null })}>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
