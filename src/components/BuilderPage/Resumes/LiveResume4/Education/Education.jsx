"use client";

import { getEducationValues } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./Education.module.scss";

const Education = () => {
  const educationInputs = useFormsStore((s) => s.educationInputs);
  const [
    universityName,
    universityLocation,
    degree,
    fieldOfStudy,
    graduationDate,
  ] = getEducationValues(educationInputs);

  return (
    <section className={s.education}>
      <SectionTitle>Education</SectionTitle>

      <div className={s.educationContent}>
        <div className={s.wrapper}>
          <p className={s.degree}>
            <strong>{degree}</strong>
          </p>

          <p className={s.fieldOfStudy}>
            {fieldOfStudy} at <strong>{universityName}</strong>,{" "}
            {universityLocation}
          </p>
        </div>

        <p className={s.graduateDate}>
          <time>{graduationDate}</time>
        </p>
      </div>
    </section>
  );
};

export default Education;
