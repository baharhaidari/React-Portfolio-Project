import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from "../locales/en/translation.json";
import translationsInSpanish from "../locales/sp/translation.json";
import translationsInGerman from "../locales/german/translation.json";

const resources = {
  en: {
    translation: translationsInEng,
  },
  es: {
    translation: translationsInSpanish,
  },
  german: {
    translation: translationsInGerman,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  ns: "translation",
  defaultNS: "translation",
});

export default i18n;
