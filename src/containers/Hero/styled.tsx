/*
 * Styling using styled components
 */

import styled from "styled-components";

const HeroContainer = styled.div`
  color: white;
  top: 0;
  left: 0;
  right: 0;
  height: 120vh;
  overflow: hidden;
`;

const HeroBackdrop = styled.div<{ src: string }>`
  height: 120vh;
  background-color: white;
  background-color: ${(p) => p.theme.colors.justblack};
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    ),
    url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroContentWrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 60px;
  width: 36%;
`;

const HeroTitle = styled.div`
  font-size: 82px;
`;

const HeroDesc = styled.div`
  font-size: 1.4vw;
  font-weight: 300;
  padding-bottom: 2rem;
`;

const HeroButtonWrapper = styled.span`
  & button {
    margin-right: 1rem;
  }
`;

export const SC = {
  HeroContainer,
  HeroBackdrop,
  HeroContentWrapper,
  HeroTitle,
  HeroDesc,
  HeroButtonWrapper,
};
