"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getEducationValues } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./Education.module.scss";

const Education = () => {
  const educationInputs = useFormsStore((s) => s.educationInputs);
  const [
    universityName,
    universityLocation,
    degree,
    fieldOfStudy,
    graduateMonth,
    graduateYear,
  ] = getEducationValues(educationInputs);

  return (
    <section className={s.education}>
      <h2>Education</h2>

      <div className={s.educationContent}>
        <p className={s.degree}>
          <strong>{degree}</strong>
        </p>
        <p className={s.fieldOfStudy}>{fieldOfStudy}</p>

        <p className={s.university}>
          <strong>{universityName}</strong>, {universityLocation}
        </p>
        <p className={s.graduateDate}>
          <SvgIcon name="schedule" /> Graduated: {graduateMonth} {graduateYear}
        </p>
      </div>
    </section>
  );
};

export default Education;
