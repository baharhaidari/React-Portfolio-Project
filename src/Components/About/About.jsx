import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import laptopimg from "../../assets/Images/laptop.png";
import codeimg from "../../assets/Images/code-simple.png";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <img src={laptopimg} alt="" className="laptop" />
      <img src={codeimg} alt="" className="code" />

      <div>
        <h1 className="heading">{t("ABOUT.heading")}</h1>
        <Tabs />
      </div>
    </section>
  );
}
