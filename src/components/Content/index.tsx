/**
 * Content
 */

import React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import { ContentProps } from "./interfaces";
import { SC } from "./styled";

const Content: React.FC<ContentProps> = ({
  imgUrl,
  desc = "Lorem ipsum dolor sit amet.",
  title = "Title",
  onClose,
}) => {
  console.log("Content", imgUrl);
  console.log("Content", title);
  return (
    <SC.ContentContainer>
      <SC.ContentBackground className="content__background">
        <SC.ContentShadow className="content__background__shadow" />
        <SC.ContentBackgroundImage
          src={imgUrl}
          className="content__background__image"
        />
      </SC.ContentBackground>
      <SC.ContentArea className="content__area">
        <SC.ContentAreaContainer className="content__area__container">
          <SC.ContentTitle className="content__title">{title}</SC.ContentTitle>
          <SC.ContentDesc className="content__description">
            {desc}
          </SC.ContentDesc>
        </SC.ContentAreaContainer>
        <SC.ContentCloseButton className="content__close" onClick={onClose}>
          <Close />
        </SC.ContentCloseButton>
      </SC.ContentArea>
    </SC.ContentContainer>
  );
};

export default Content;
