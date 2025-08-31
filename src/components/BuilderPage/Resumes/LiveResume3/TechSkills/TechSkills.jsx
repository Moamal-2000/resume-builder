"use client";

import { getInputValueOrFallback } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./TechSkills.module.scss";

const TechSkills = () => {
  const techSkillsInputs = useFormsStore((s) => s.techSkillsInputs);

  return (
    <section className={s.techSkills}>
      <SectionTitle>Skills</SectionTitle>

      <ul className={s.skills}>
        {techSkillsInputs.map((input, index) => {
          const skill = getInputValueOrFallback(input);
          return <li key={`${skill}-${index}`}>{skill}</li>;
        })}
      </ul>
    </section>
  );
};

export default TechSkills;
