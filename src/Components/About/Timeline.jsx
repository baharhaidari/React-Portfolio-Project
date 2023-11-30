import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Timeline.css";

const Timeline = () => {
  const { t } = useTranslation();

  // storing timeline data in a variable to easily iterate over it
  const timelineData = t("ABOUT.timeline", { returnObjects: true });

  // setting the value of search input
  const [searchTerm, setSearchTerm] = useState("");

  // updating the value of search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // filtering items by their titles
  const filteredData = timelineData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // formatting the item's date
  const getDate = (item) => {
    const formattedDate = `${item.startDate} - ${item.endDate}`;
    return formattedDate;
  };

  return (
    <>
      <div className="search-container">
        <label>{t("ABOUT.SEARCH.label")}: </label>
        <input
          type="text"
          placeholder={t("ABOUT.SEARCH.placeholder")}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="timeline">
        {filteredData.map((item, index) => (
          <div
            className={`container ${index % 2 === 0 ? "left" : "right"} ${
              index % 2 === 0 ? "animate-left" : "animate-right"
            }`}
            key={index}
          >
            <div className="content">
              <h2>
                <span>{getDate(item)}</span>
              </h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
