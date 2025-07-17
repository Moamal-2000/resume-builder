import SvgIcon from "@/components/Shared/SvgIcon";
import { MY_TECH_SKILLS } from "@/data/staticData";
import s from "./TechSkills.module.scss";

const TechSkills = () => {
  return (
    <section className={s.techSkills}>
      <h2>Technical Skills</h2>

      <ul className={s.skills}>
        {MY_TECH_SKILLS.map((skill, index) => (
          <li key={`${skill}-${index}`}>
            <SvgIcon name="circularCorrect" />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechSkills;
