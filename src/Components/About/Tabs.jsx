import React, { useState, useRef } from "react";
import Slider from "react-slick";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
import Certificates from "./Certificate";
import { useTranslation } from "react-i18next";
import "./Tabs.css";

const Tabs = () => {
  // updating the active tab
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  // setting active tab based on its index
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    sliderRef.current.slickGoTo(tabIndex);
  };

  const { t } = useTranslation();

  // setting slider setting
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeTab,
    beforeChange: (_, nextIndex) => setActiveTab(nextIndex),
  };

  return (
    <div className="tabs-container">
      <div className="button-container">
        <button
          onClick={() => handleTabChange(0)}
          className={`tab ${activeTab === 0 ? "active-tab" : ""}`}
        >
          {t("ABOUT.fisrt-tab")}
        </button>

        <button
          onClick={() => handleTabChange(1)}
          className={`tab ${activeTab === 1 ? "active-tab" : ""}`}
        >
          {t("ABOUT.second-tab")}
        </button>

        <button
          onClick={() => handleTabChange(2)}
          className={`tab ${activeTab === 2 ? "active-tab" : ""}`}
        >
          {t("ABOUT.third-tab")}
        </button>
      </div>

      <Slider {...sliderSettings} ref={sliderRef}>
        <div>
          <AboutMe />
        </div>
        <div>
          <Timeline />
        </div>
        <div>
          <Certificates />
        </div>
      </Slider>
    </div>
  );
};

export default Tabs;
