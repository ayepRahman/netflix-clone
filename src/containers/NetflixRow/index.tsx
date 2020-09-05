/**
 * NetflixRow
 */

import React from "react";
import useAxios from "axios-hooks";
import { Skeleton } from "@material-ui/lab";
import { SC } from "./styled";
import { NetflixRowProps } from "./interfaces";
import Slider, { SliderItem } from "components/Slider";
import { MovieDataProps } from "components/Slider/interfaces";

const NetflixRow: React.FC<NetflixRowProps> = ({ title, fetchUrl }) => {
  const [{ data, loading }] = useAxios(fetchUrl);

  console.log(`${title}: [DATA]`, data);

  return (
    <SC.NetflixRowWrapper>
      {loading && !data?.results.length ? (
        <Skeleton animation="wave" variant="rect" width={210} height={118} />
      ) : (
        <div>
          <SC.NetflixRowTitle>{title}</SC.NetflixRowTitle>
          <Slider>
            {data.results.map((ele: MovieDataProps) => (
              <SliderItem key={ele.id} item={ele} />
            ))}
          </Slider>
        </div>
      )}
    </SC.NetflixRowWrapper>
  );
};

export default NetflixRow;
