import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./banner.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import banner from "../../../assets/bg.jpg";

const Banner = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const serchBtnHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="banner">
      <div className="backdrop-img">
        <img src={banner} alt="" />
      </div>

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="banner-content">
          <span className="title">
            Welcome to <span>Cinepedia.</span>
          </span>
          <span className="subTitle">
            Unlimited movies & TV Shows to explore? Search now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search movie or tv show"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchHandler}
            />
            <button onClick={serchBtnHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
