/*
 * Styling using styled components
 */

import styled from "styled-components";
import { SC as SCShowDetailsButton } from "components/ShowDetailsButton/styled";

export const ItemContainer = styled.div<{ isActive: boolean }>`
  flex: 0 0 19.7%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${SCShowDetailsButton.ShowDetailsButtonContainer} {
    opacity: 1;
  }
`;

export const SC = {
  ItemContainer,
};
