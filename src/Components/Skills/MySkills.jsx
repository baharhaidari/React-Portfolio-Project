import React from "react";
import { useTranslation } from "react-i18next";
import SkillBar from "./SkillBars";
import "./MySkills.css";

export default function MySkills() {
  const { t } = useTranslation();
  const personalSkills = t("SKILLS.PERSONAL_SKILLS", { returnObjects: true });
  const technicalSkills = t("SKILLS.TECHNICA_SKILLS", { returnObjects: true });

  return (
    <section id="skills" className="skills-section">
      <h1 className="heading">{t("SKILLS.heading")}</h1>

      <div className="skills">
        <div className="technical-skills">
          <li className="skills-title">
            {t("SKILLS.TECHNICA_SKILLS_SUB_TITLE")}
          </li>

          {/* dynamic rendering technical skills */}
          {technicalSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <div className=" personal-skills">
          <li className="skills-title">
            {t("SKILLS.PERSONAL_SKILLS_SUB_TITLE")}
          </li>

          {/* dynamic rendering personal skills */}
          {personalSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
