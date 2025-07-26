"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { EXPERIENCE_MAX_COUNT } from "@/data/constants";
import { getInputValueOrFallback } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTabs.module.scss";

const ExperienceTabs = () => {
  const {
    addExperience,
    removeExperience,
    experiencesInputs,
    experiencesTabIndex,
    updateTabIndex,
  } = useFormsStore((s) => s);
  const mainExperienceInputs = experiencesInputs[0];
  const mainTabTitle = getInputValueOrFallback(mainExperienceInputs[0]);
  const shouldHideAddButton = experiencesInputs.length >= EXPERIENCE_MAX_COUNT;

  function handleTabClick(event, index) {
    const clickedTagName = event.target.tagName;
    const sameTabClicked = experiencesTabIndex === index + 1;
    const removeIconClicked =
      clickedTagName === "svg" || clickedTagName === "path";

    if (removeIconClicked || sameTabClicked) return false;

    updateTabIndex(index + 1);
  }

  function handleRemoveExperience(event, index) {
    const clickedTagName = event.target.tagName;
    if (clickedTagName === "SPAN") return false;

    removeExperience(index + 1);
  }

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
          onClick={(event) => handleTabClick(event, index)}
        >
          {getInputValueOrFallback(experienceInput[0])}
          <span
            className={s.xMark}
            onClick={(event) => handleRemoveExperience(event, index)}
            title="Remove experience"
          >
            <SvgIcon name="xMark" />
          </span>
        </button>
      ))}

      {!shouldHideAddButton && (
        <button type="button" onClick={addExperience} className={s.addTab}>
          + Add Experience
        </button>
      )}
    </div>
  );
};

export default ExperienceTabs;
