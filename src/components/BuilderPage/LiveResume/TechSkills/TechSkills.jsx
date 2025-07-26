"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getInputValueOrFallback } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./TechSkills.module.scss";

const TechSkills = () => {
  const techSkillsInputs = useFormsStore((s) => s.techSkillsInputs);

  return (
    <section className={s.techSkills}>
      <h2>Technical Skills</h2>

      <ul className={s.skills}>
        {techSkillsInputs.map((input, index) => {
          const skill = getInputValueOrFallback(input);

          return (
            <li key={`${skill}-${index}`}>
              <SvgIcon name="circularCorrect" />
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TechSkills;
