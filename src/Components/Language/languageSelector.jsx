// import React, { useState } from "react";
// import i18n from "../i18n/indexs";
// import "./languageSelector.css";
// import { useTranslation } from "react-i18next";

// const LanguageSelector = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

//   const chooseLanguage = (e) => {
//     e.preventDefault();
//     i18n.changeLanguage(e.target.value);
//     setSelectedLanguage(e.target.value);
//     localStorage.setItem("lang", e.target.value);
//   };

//   const { t } = useTranslation();

//   return (
//     <select
//       defaultValue={selectedLanguage}
//       onChange={chooseLanguage}
//       className="lang-input"
//     >
//       <option value="en">{t("LANGUAGE_INPUT.english")}</option>
//       <option value="es">{t("LANGUAGE_INPUT.spanish")}</option>
//       <option value="german">{t("LANGUAGE_INPUT.german")}</option>
//     </select>
//   );
// };

// export default LanguageSelector;

import React, { useState, useEffect } from "react";
import i18n from "../i18n/indexs";
import "./languageSelector.css";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lang") || i18n.language
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
  }, [selectedLanguage]);

  const chooseLanguage = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
  };

  const { t } = useTranslation();

  return (
    <select
      value={selectedLanguage}
      onChange={chooseLanguage}
      className="lang-input"
    >
      <option value="en">{t("LANGUAGE_INPUT.english")}</option>
      <option value="es">{t("LANGUAGE_INPUT.spanish")}</option>
      <option value="german">{t("LANGUAGE_INPUT.german")}</option>
    </select>
  );
};

export default LanguageSelector;
