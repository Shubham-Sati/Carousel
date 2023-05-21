import React from "react";
import "./Home.css";
import Carousel from "../component/carousal/Carousel";
import MultiImageCarousel from "../component/multiImageCarousel/MultiImageCarousel";

const Home = () => {
  return (
    <div className="homeDiv">
      <Carousel />
      <MultiImageCarousel />
    </div>
  );
};

export default Home;
