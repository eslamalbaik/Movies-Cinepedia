import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";

import useFetch from "../../../src/hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/trending/${endpoint}/day`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="cont">
          <div>
            <span className="carouselTitle">Trending🔥</span>
          </div>
          <div className="home-st">
            <SwitchTabs
              data={["Movies", "TV Shows"]}
              onTabChange={onTabChange}
            />
          </div>
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
