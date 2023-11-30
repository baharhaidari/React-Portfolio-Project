import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import CV from "../../CV/Bahar Haidari.pdf";
import profile from "../../assets/Images/profi.jpg";
import Typed from "typed.js";
import "./Header.css";

function Header() {
  const { t } = useTranslation();
  const professionRef = useRef(null);

  // adding type-writer effect to the text
  useEffect(() => {
    const options = {
      strings: [t("HEADER.profession"), t("HEADER.profession2")],
      typeSpeed: 130,
      backSpeed: 130,
      backDelay: 1300,
      loop: true,
    };

    const typed = new Typed(professionRef.current, options);

    return () => {
      // retyping
      typed.destroy();
    };
  }, [t]);

  return (
    <section id="home" className="homeSection">
      <div className="home-content">
        <div className="contents">
          <h3>{t("HEADER.greet")}</h3>
          <h1>{t("HEADER.name")}</h1>
          <h3 className="profession" ref={professionRef}>
            <span></span>
          </h3>
          <p>{t("HEADER.desc")}</p>
        </div>

        <div className="buttons-containers">
          <a href={CV} download="Bahar Haidari Resume">
            <button className="btns btn-download">
              <span className="btn-icons">
                <i className="bx bxs-download"></i>
              </span>

              <span className="btn-text">{t("HEADER.cv-button")} </span>
              <span className="gradient"></span>
            </button>
          </a>

          <a href="#contact">
            <button className="btns ">
              <span className="btn-icons">
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <span className="btn-text">{t("HEADER.contact-button")} </span>
              <span className="gradient"></span>
            </button>
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profile} className="img" alt={t("HEADER.image-alt")}></img>
      </div>
    </section>
  );
}

export default Header;
