"use client";

import { getInputValueOrFallback } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTabs.module.scss";

const ExperienceTabs = () => {
  const {
    addExperience,
    experiencesInputs,
    experiencesTabIndex,
    updateTabIndex,
  } = useFormsStore((s) => s);
  const mainExperienceInputs = experiencesInputs[0];
  const mainTabTitle = getInputValueOrFallback(mainExperienceInputs[0]);

  return (
    <div className={s.experienceTabs}>
      <button
        type="button"
        className={`${s.mainTab} ${experiencesTabIndex === 0 ? s.active : ""}`}
        onClick={() => updateTabIndex(0)}
      >
        {mainTabTitle}
      </button>

      {experiencesInputs.slice(1).map((experienceInput, index) => (
        <button
          type="button"
          key={index}
          className={index + 1 === experiencesTabIndex ? s.active : ""}
          onClick={() => updateTabIndex(index + 1)}
        >
          {getInputValueOrFallback(experienceInput[0])}
        </button>
      ))}

      <button type="button" onClick={addExperience}>
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceTabs;
