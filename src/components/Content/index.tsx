/**
 * Content
 */

import React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
// import { ContentProps } from "./interfaces";
// import { ContentContainer } from "./styled";

// .content {
//   position: relative;
//   height: 37vw;
//   margin-top: -40px;

//   &__background,
//   &__background__shadow,
//   &__background__image,
//   &__area {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//   }

//   &__background {
//     left: 0;
//     right: 0;

//     &__shadow {
//       left: 0;
//       background: #000;
//       width: 30%;
//       z-index: 2;

//       &:before {
//         content: '';
//         position: absolute;
//         z-index: 10;
//         background-image: linear-gradient(to right,#000,transparent);
//         top: 0;
//         bottom: 0;
//         left: 100%;
//         width: 275px;
//       }
//     }

//     &__image {
//       right: 0;
//       width: 70%;
//       height: 100%;
//       background-position: center 10%;
//       background-size: cover;
//       z-index: 1;
//     }
//   }

//   &__area {
//     left: 0;
//     right: 0;
//     height: 100%;
//     z-index: 3;

//     &__container {
//       padding: 30px 70px;
//       color: wheat;
//     }
//   }

//   &__title {
//     font-size: 45px;
//     color: #fff;
//     font-weight: 700;
//   }

//   &__description {
//     font-size: 18px;
//     color: #999;
//     margin-top: 20px;
//     max-width: 500px;
//   }

//   &__close {
//     color: #fff;
//     width: 40px;
//     height: 40px;
//     background: transparent;
//     outline: none;
//     border: none;
//     position: absolute;
//     top: 30px;
//     right: 30px;
//   }
// }

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
  ${ContentContainer}
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

const ContentBackgroundImage = styled.div<{ src?: string }>`
  right: 0;
  width: 70%;
  height: 100%;
  background-position: center 10%;
  background-size: cover;
  z-index: 1;
  background-image: url(${(p) => p.src});
`;

const ContentArea = styled.div`
  left: 60px;
  right: 0;
  height: 100%;
  z-index: 3;
`;

const ContentAreaContainer = styled.div`
  ${ContentArea}
  padding: 30px 70px;
  color: wheat;
`;

const ContentTitle = styled.div`
  ${ContentArea}
  font-size: 45px;
  color: #fff;
  font-weight: 700;
`;

const ContentDesc = styled.div`
  ${ContentArea}
  font-size: 18px;
  color: #999;
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
`;

export const SC = {
  ContentContainer,
  ContentBackground,
  ContentShadow,
  ContentArea,
  ContentAreaContainer,
  ContentTitle,
  ContentDesc,
  ContentCloseButton,
};

export interface ContentProps {
  imgUrl: string;
  desc: string;
  title: string;
  onClose: () => void;
}

const Content: React.FC<ContentProps> = ({ imgUrl, desc, title, onClose }) => {
  console.log("Content", imgUrl);
  return (
    <SC.ContentContainer>
      <ContentBackground className="content__background">
        <ContentShadow className="content__background__shadow" />
        <ContentBackgroundImage
          src={imgUrl}
          className="content__background__image"
        />
      </ContentBackground>
      <ContentArea className="content__area">
        <ContentAreaContainer className="content__area__container">
          <ContentTitle className="content__title">{title}</ContentTitle>
          <ContentDesc className="content__description">
            {desc ||
              `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum pariatur architecto reprehenderit ipsam enim dolorem! Placeat, ex eos. Dolore, quae.`}
          </ContentDesc>
        </ContentAreaContainer>
        <ContentCloseButton className="content__close" onClick={onClose}>
          <Close />
        </ContentCloseButton>
      </ContentArea>
    </SC.ContentContainer>
  );
};

export default Content;
