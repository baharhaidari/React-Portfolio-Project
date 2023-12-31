import React from "react";
import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faBicycle,
  faHeadphones,
  faPlaneUp,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/Images/profi.jpg";

function AboutMe() {
  const { t } = useTranslation();

  // storing JSON obj properties in variables
  const hobbies = t("ABOUT.hobbies", { returnObjects: true });
  const contactInfo = t("ABOUT.Contact-info", { returnObjects: true });

  return (
    <div className="about-container">
      <div className="img-container">
        <img src={profile} alt="Bahar Haidari" />
      </div>

      <div className="about-info">
        <div>
          <p className="desc">{t("ABOUT.desc")}</p>

          <ul className="info">
            {/* dynamically generating contact info */}
            {contactInfo.map((info, index) => {
              return (
                <li key={index}>
                  {info.lable}: <span>{info.info}</span>
                </li>
              );
            })}
          </ul>

          <div className="hobbies">
            <h3>{t("ABOUT.Hobbies-heading")}</h3>
            <ul>
              {/* dynamically generating hobbies and setting their icon based on their indexes */}
              {hobbies.map((hobbie, index) => {
                const getIcon = (index) => {
                  if (index === 0) {
                    return <FontAwesomeIcon icon={faGamepad} />;
                  } else if (index === 1) {
                    return <FontAwesomeIcon icon={faBicycle} />;
                  } else if (index === 2) {
                    return <FontAwesomeIcon icon={faHeadphones} />;
                  } else if (index === 3) {
                    return <FontAwesomeIcon icon={faPlaneUp} />;
                  } else if (index === 4) {
                    return <FontAwesomeIcon icon={faBagShopping} />;
                  }
                  return null;
                };

                return (
                  <li key={index}>
                    <span className="hobbie-icon">{getIcon(index)}</span>
                    <span className="item">{hobbie}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
