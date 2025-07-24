"use client";

import { getInputValueOrFallback } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTabs.module.scss";

const ExperienceTabs = () => {
  const experienceInputs = useFormsStore((s) => s.experienceInputs[0]);
  const mainTabTitle = getInputValueOrFallback(experienceInputs[0]);

  return (
    <div className={s.experienceTabs}>
      <button type="button" className={`${s.mainTab} ${s.active}`}>
        {mainTabTitle}
      </button>
      <button type="button">+ Add Experience</button>
    </div>
  );
};

export default ExperienceTabs;
