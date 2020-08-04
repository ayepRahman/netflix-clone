import React from "react";
import styled from "styled-components";

const SliderItemWrapper = styled.div<{ width: string }>`
  width: ${(p) => `${p.width}%`};
  padding: 0 4px;
  display: inline-block;

  /* &-image {
    width: 100%;
    height: 100%;
  } */

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;

const SliderItemImg = styled.img`
  width: 100%;
  height: 100%;
`;

export interface SliderItemProps {
  width: string;
  item: {
    title: string;
    imageUrl: string;
  };
}

const SliderItem: React.FC<SliderItemProps> = ({ item, width }) => {
  return (
    <SliderItemWrapper width={width}>
      <SliderItemImg src={item.imageUrl} alt={item.title} />
    </SliderItemWrapper>
  );
};

export default SliderItem;
