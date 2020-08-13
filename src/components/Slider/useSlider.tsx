import React from "react";

const PADDINGS = 110;

const useSlider = (elementWidth: number, countElements: number) => {
  const containerRef = React.useRef<HTMLElement>(null);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [distance, setDistance] = React.useState<number>(0);
  const [totalInViewport, setTotalInViewport] = React.useState<number>(0);
  const [viewed, setViewed] = React.useState<number>(0);

  React.useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth - PADDINGS;
      setContainerWidth(containerWidth);
      setTotalInViewport(Math.floor(containerWidth / elementWidth));
    }
  }, [containerRef?.current]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSlider;
