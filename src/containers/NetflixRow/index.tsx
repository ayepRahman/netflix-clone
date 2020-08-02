/**
 * NetflixRow
 */

import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { Container } from "./styled";
import { NetflixRowProps } from "./interfaces";

const NetflixRowWrapper = styled.div`
  color: white;
`;

const NetflixRowTitle = styled.div`
  font-size: 1.4vw;
  padding-left: 60px;
`;

const NetflixRow: React.FC<NetflixRowProps> = ({ title, fetchUrl }) => {
  const [{ data, loading }] = useAxios(fetchUrl);

  console.log(data);

  return (
    <NetflixRowWrapper>
      {loading ? (
        <div>skeleton</div>
      ) : (
        <div>
          <NetflixRowTitle>{title}</NetflixRowTitle>
        </div>
      )}
    </NetflixRowWrapper>
  );
};

export default NetflixRow;
