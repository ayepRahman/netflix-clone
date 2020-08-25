/**
 * NetflixRow
 * @link - https://github.com/andrzejewsky/netflix-slider/tree/master/src/components/NetflixSlider
 */

import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";
import { Container } from "./styled";
import { NetflixRowProps } from "./interfaces";
import { TMDB_BASE_IMG_URL } from "constants/tmdb";

const NetflixRowWrapper = styled.div`
  color: white;
`;

const NetflixRowTitle = styled.div`
  font-size: 1.4vw;
  padding: 0 0 1rem 60px;
`;

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
        </div>
      )}
    </NetflixRowWrapper>
  );
};

export default NetflixRow;
