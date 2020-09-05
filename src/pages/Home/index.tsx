import React from "react";
import Navbar from "components/Navbar";
import Hero from "containers/Hero";
import NetflixRow from "containers/NetflixRow";
import requests from "utils/requests";
import { SC } from "./styled";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SC.HomePageBody>
        <NetflixRow
          title="Netflix Original"
          fetchUrl={requests.fetchNetFlixOriginal}
        />
        <NetflixRow title="Trending" fetchUrl={requests.fetchTrending} />
        <NetflixRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <NetflixRow title="Animation" fetchUrl={requests.fetchAnime} />
        <NetflixRow title="Action Movies" fetchUrl={requests.fetchAction} />
        <NetflixRow title="Comedy Movies" fetchUrl={requests.fetchComedy} />
        <NetflixRow title="Horror Movies" fetchUrl={requests.fetchHorror} />
        <NetflixRow
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </SC.HomePageBody>
    </div>
  );
};

export default HomePage;
