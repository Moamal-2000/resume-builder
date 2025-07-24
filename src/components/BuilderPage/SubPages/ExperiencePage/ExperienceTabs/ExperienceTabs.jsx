"use client";

import { getInputValueOrFallback } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTabs.module.scss";

const ExperienceTabs = () => {
  const experiencesInputs = useFormsStore((s) => s.experiencesInputs[0]);
  const addExperience = useFormsStore((s) => s.addExperience);
  const mainTabTitle = getInputValueOrFallback(experiencesInputs[0]);

  return (
    <div className={s.experienceTabs}>
      <button type="button" className={`${s.mainTab} ${s.active}`}>
        {mainTabTitle}
      </button>
      <button type="button" onClick={addExperience}>+ Add Experience</button>
    </div>
  );
};

export default ExperienceTabs;
