"use client";

import { getJobExperienceProps } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./Experiences.module.scss";
import JobExperience from "./JobExperience/JobExperience";

const Experiences = () => {
  const experiencesInputs = useFormsStore((s) => s.experiencesInputs);

  return (
    <section className={s.experiences}>
      <SectionTitle>Experiences</SectionTitle>

      <div className={s.experiencesWrapper}>
        {experiencesInputs.map((experienceData, index) => {
          const jobExperienceProps = getJobExperienceProps(experienceData);
          return <JobExperience key={index} {...jobExperienceProps} />;
        })}
      </div>
    </section>
  );
};

export default Experiences;
