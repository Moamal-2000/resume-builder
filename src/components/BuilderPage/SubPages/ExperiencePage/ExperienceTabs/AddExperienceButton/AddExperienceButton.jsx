"use client";

import { EXPERIENCE_MAX_COUNT } from "@/data/constants";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./AddExperienceButton.module.scss";

const AddExperienceButton = () => {
  const { experiencesInputs, addExperience } = useFormsStore((s) => s);
  const shouldHideAddButton = experiencesInputs.length >= EXPERIENCE_MAX_COUNT;

  if (shouldHideAddButton) return null;

  return (
    <button type="button" onClick={addExperience} className={s.addTab}>
      + Add Experience
    </button>
  );
};

export default AddExperienceButton;
