import React from "react";
// import sections
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Cta from "../components/sections/Cta";
import HeroNew from "../components/sections/HeroNew";

const Home = () => {
  return (
    <>
      <HeroNew invertMobile imageFill className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit />
      <Cta split />
    </>
  );
};

export default Home;
