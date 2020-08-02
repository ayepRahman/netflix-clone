/**
 * Hero
 */

import React from "react";
import useAxios from "axios-hooks";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Container } from "./styled";
import requests from "utils/requests";
import OverlayLoader from "components/OverlayLoader";

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120vh;
  /* background: paleturquoise; */
`;

const HeroBackdrop = styled.img`
  height: 120vh;
  width: 100vw;
  /* background-image: ${(p) => p.src};
  background-repeat: no-repeat;
  background-position: center; */
`;

const Hero: React.FC = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    requests.fetchNetFlixOriginal
  );
  const RANDOM_SELECT_NUMBER = Math.floor(Math.random() * 21);

  console.log("RANDOM_SELECT_NUMBER", RANDOM_SELECT_NUMBER);
  console.log(data?.results);

  // backdrop_path: "/qsnXwGS7KBbX4JLqHvICngtR8qg.jpg";
  // first_air_date: "2015-04-10";
  // genre_ids: (2)[(28, 80)];
  // id: 61889;
  // name: "Marvel's Daredevil";
  // origin_country: ["US"];
  // original_language: "en";
  // original_name: "Marvel's Daredevil";
  // overview: "Lawyer-by-day Matt Murdock uses his heightened senses from being blinded as a young boy to fight crime at night on the streets of Hell’s Kitchen as Daredevil.";
  // popularity: 43.218;
  // poster_path: "/QWbPaDxiB6LW2LjASknzYBvjMj.jpg";
  // vote_average: 7.9;
  // vote_count: 1901;

  return (
    <HeroContainer>
      {loading && !data?.results?.length ? (
        <OverlayLoader />
      ) : (
        <HeroBackdrop
          src={`https://image.tmdb.org/t/p/original${data.results[RANDOM_SELECT_NUMBER].backdrop_path}`}
        ></HeroBackdrop>
      )}
    </HeroContainer>
  );
};

export default Hero;
