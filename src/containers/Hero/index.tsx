/**
 * Hero
 */

import React from "react";
import useAxios from "axios-hooks";
import { Button, Icon } from "@material-ui/core";
import styled from "styled-components";
import requests from "utils/requests";
import OverlayLoader from "components/OverlayLoader";
import { SC } from "./styled";
import { TMDB_BASE_IMG_URL } from "constants/tmdb";

const Hero: React.FC = () => {
  const [{ data, loading }] = useAxios(requests.fetchNetFlixOriginal);
  const RANDOM_SELECT_NUMBER = Math.floor(Math.random() * 21);

  return (
    <SC.HeroContainer>
      {loading && !data?.results?.length ? (
        <OverlayLoader />
      ) : (
        <SC.HeroBackdrop
          src={`${TMDB_BASE_IMG_URL}${data.results?.[RANDOM_SELECT_NUMBER]?.backdrop_path}`}
        >
          <SC.HeroContentWrapper>
            <SC.HeroTitle>
              {data.results?.[RANDOM_SELECT_NUMBER]?.name}
            </SC.HeroTitle>
            <SC.HeroDesc>
              {data.results?.[RANDOM_SELECT_NUMBER]?.overview}
            </SC.HeroDesc>
            <SC.HeroButtonWrapper>
              <Button
                size="large"
                variant="contained"
                startIcon={<Icon>play_arrow</Icon>}
              >
                Play
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<Icon>info</Icon>}
              >
                More Info
              </Button>
            </SC.HeroButtonWrapper>
          </SC.HeroContentWrapper>
        </SC.HeroBackdrop>
      )}
    </SC.HeroContainer>
  );
};

export default Hero;
