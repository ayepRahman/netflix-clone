import React from "react";
import Navbar from "components/Navbar";
import Hero from "containers/Hero";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
