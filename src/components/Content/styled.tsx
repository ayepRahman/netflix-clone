/*
 * Styling using styled components
 */

import styled from "styled-components";

const ContentContainer = styled.div`
  position: relative;
  height: 37vw;
  margin-top: -40px;
`;

const ContentBackground = styled(ContentContainer)`
  position: absolute;
  top: 0;
  bottom: 0;
`;

const ContentShadow = styled(ContentContainer)`
  left: 0;
  background: #000;
  width: 30%;
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`;

const ContentBackgroundImage = styled(ContentContainer)<{ src?: string }>`
  position: absolute;
  height: 37vw;
  margin-top: -40px;
  right: 0;
  left: 0;
  top: 0;
  width: 100vw;
  background-position: center 10%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  background-image: url(${(p) => p.src});
`;

const ContentArea = styled.div`
  position: absolute;
  left: 60px;
  left: 0px;
  right: 0;
  height: 100%;
  z-index: 3;
`;

const ContentAreaContainer = styled.div`
  padding: 60px 60px 30px;
  color: wheat;
`;

const ContentTitle = styled.div`
  margin-top: 20px;
  font-size: 45px;
  color: #fff;
  font-weight: 700;
`;

const ContentDesc = styled.div`
  font-size: 18px;
  color: #fff;
  margin-top: 20px;
  max-width: 500px;
`;

const ContentCloseButton = styled.button`
  color: #fff;
  width: 40px;
  height: 40px;
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const SC = {
  ContentContainer,
  ContentBackground,
  ContentShadow,
  ContentArea,
  ContentAreaContainer,
  ContentBackgroundImage,
  ContentTitle,
  ContentDesc,
  ContentCloseButton,
};
