import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
import SliderContext from "./context.tsx";
import { SliderContextProps } from "./interface";

const Item = ({ movie }) => {
  const context = React.useContext<Partial<SliderContextProps>>(SliderContext);
  console.log("[Item]: context", context);
  const { onSelectSlide, currentSlide, elementRef } = context;
  const isActive = currentSlide && currentSlide.id === movie.id;

  return (
    <div
      ref={elementRef}
      className={cx("item", {
        "item--open": isActive,
      })}
    >
      <img src={movie.image} alt="" />
      <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
      {isActive && <Mark />}
    </div>
  );
};
<SliderContext.Consumer>
  {({ onSelectSlide, currentSlide, elementRef }) => {
    const isActive = currentSlide && currentSlide.id === movie.id;

    return (
      <div
        ref={elementRef}
        className={cx("item", {
          "item--open": isActive,
        })}
      >
        <img src={movie.image} alt="" />
        <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
        {isActive && <Mark />}
      </div>
    );
  }}
</SliderContext.Consumer>;

export default Item;
