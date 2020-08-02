/**
 * OverlayLoader
 */

import React from "react";
import styled, { keyframes } from "styled-components";
import { OverlayLoaderProps } from "./interface";
// import { OverlayLoaderContainer } from "./styled";

const OverlayLoaderContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img.attrs({
  src: "https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png",
})`
  height: 100px;
  width: 100px;
  animation: ${rotate} 1s linear infinite;
`;

const OverlayLoader: React.FC<OverlayLoaderProps> = () => {
  return (
    <OverlayLoaderContainer>
      <Spinner />
    </OverlayLoaderContainer>
  );
};

export default OverlayLoader;
