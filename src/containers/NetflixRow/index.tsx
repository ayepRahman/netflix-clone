/**
 * NetflixRow
 * @desc - credit to Andrew Tham medium post for netflixCarousel like -
 * https://medium.com/@andrew.tham.cc/recreating-netflixs-slider-component-2d6ad9009ab0https://medium.com/@andrew.tham.cc/recreating-netflixs-slider-component-2d6ad9009ab0
 */

import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";
import { Container } from "./styled";
import { NetflixRowProps } from "./interfaces";
import { TMDB_BASE_IMG_URL } from "constants/tmdb";

import {
  FlickingEvent,
  SelectEvent,
  ChangeEvent,
  NeedPanelEvent,
} from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
// import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";

const duration = "450ms";
const tileWidth = "250px";
const tileHeight = `calc(${tileWidth} / (16/9))`;
const iconSize = "50px";
const growFactor = "1.5"; // 1.5 times the original size
const moveLeft = `-((${tileWidth} * (${growFactor} - 1)) / 2)`;
const moveRight = `${tileWidth} * (${growFactor} - 1)`;

const NetflixRowWrapper = styled.div`
  color: white;
`;

const NetflixRowTitle = styled.div`
  font-size: 1.4vw;
  padding: 0 0 1rem 60px;
`;

const NetflixSkeleton = styled.div`
  /* background: white; */
  width: 230px;
  height: 130px;
`;

const NetflixRowCardWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  overflow-x: scroll;
`;
const NetflixRowCardWrapperInner = styled.div`
  /* padding: 60px 0 60px 60px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth; */

  transition: ${duration} transform;
  font-size: 0;
  white-space: nowrap;
  margin: (${tileHeight} / 2) 0;
  padding-bottom: 10px;
`;

export interface NetflixStyleProps {
  backdropUrl?: string;
  posterUrl?: string;
}

const NetflixCard = styled.div<NetflixStyleProps>`
  /* position: relative;
  width: 230px;
  height: 130px;
  background-color: white;
  background-image: url(${(p) => p.backdropUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 4px;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transform: scaleY(1);

  &:hover {
    cursor: pointer;
    background-image: url(${(p) => p.posterUrl});
    transform: scaleY(1.2);
    width: calc(230px + 100px);
  } */

  background-image: url(${(p) => p.backdropUrl});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center; */

  position: relative;
  display: inline-block;
  width: ${tileWidth};
  height: ${tileHeight};
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: ${duration} all;
  transform-origin: center left;
`;

// 230x130

// NetflixRow
const NetflixRow: React.FC<NetflixRowProps> = ({ title, fetchUrl }) => {
  const [{ data, loading }] = useAxios(fetchUrl);

  console.log(title, data);

  return (
    <NetflixRowWrapper>
      {loading && !data?.results.length ? (
        <Skeleton animation="wave" variant="rect" width={210} height={118} />
      ) : (
        <div>
          <NetflixRowTitle>{title}</NetflixRowTitle>
          {/* <NetflixRowCardWrapper>
            <NetflixRowCardWrapperInner>
              {data.results.map((result: any, index: number) => {
                console.log(result);
                return (
                  <NetflixCard
                    key={`netflixCard-${index}`}
                    backdropUrl={`${TMDB_BASE_IMG_URL}${result.backdrop_path}`}
                    posterUrl={`${TMDB_BASE_IMG_URL}${result.poster_path}`}
                  />
                );
              })}
            </NetflixRowCardWrapperInner>
          </NetflixRowCardWrapper> */}
        </div>
      )}
    </NetflixRowWrapper>
  );
};

export default NetflixRow;
