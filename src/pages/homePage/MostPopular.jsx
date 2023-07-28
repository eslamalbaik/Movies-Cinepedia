import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import Carousel from "../../components/carousel/Carousel";
import "../../index.scss";

const MostPopular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="cont">
          <div>
            <span className="carouselTitle">Most Popular📈</span>
          </div>
          <div className="home-st">
            <SwitchTabs
              data={["Movies", "TV Shows"]}
              onTabChange={onTabChange}
            />
          </div>
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default MostPopular;
