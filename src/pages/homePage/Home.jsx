import React from "react";
import "./home.scss";
import Banner from "./banner/Banner";
import Trending from "./Trending";
import TopRated from "./TopRated";
import MostPopular from "./MostPopular";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Trending />
      <TopRated />
      <MostPopular />
    </div>
  );
};

export default Home;
