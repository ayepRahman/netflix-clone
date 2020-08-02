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
      </SC.HomePageBody>
    </div>
  );
};

export default HomePage;
