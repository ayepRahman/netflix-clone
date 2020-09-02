/**
 * NetflixRow
 * @link - https://github.com/andrzejewsky/netflix-slider
 */

import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";
import { SC } from "./styled";
// import { Container } from "./styled";
import { NetflixRowProps } from "./interfaces";
// import { TMDB_BASE_IMG_URL } from "constants/tmdb";
import Slider, { SliderItem } from "components/Slider";
import { MovieDataProps } from "components/Slider/interfaces";

// NetflixRow
const NetflixRow: React.FC<NetflixRowProps> = ({ title, fetchUrl }) => {
  const [{ data, loading }] = useAxios(fetchUrl);
  // const [activeSlide, setActiveSlide] = React.useState(null);

  console.log(title, data);

  return (
    <SC.NetflixRowWrapper>
      {loading && !data?.results.length ? (
        <Skeleton animation="wave" variant="rect" width={210} height={118} />
      ) : (
        <div>
          <SC.NetflixRowTitle>{title}</SC.NetflixRowTitle>
          <Slider>
            {data.results.map((ele: MovieDataProps) => {
              // console.log(ele);
              return <SliderItem key={ele.id} item={ele} />;
            })}
          </Slider>
        </div>
      )}
    </SC.NetflixRowWrapper>
  );
};

export default NetflixRow;
