"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getInputValueOrFallback, hasFormFilled } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import AddExperienceButton from "./AddExperienceButton/AddExperienceButton";
import s from "./ExperienceTabs.module.scss";
import MainExperienceTab from "./MainExperienceTab/MainExperienceTab";

const ExperienceTabs = () => {
  const {
    removeExperience,
    updateTabIndex,
    experiencesInputs,
    experiencesTabIndex,
  } = useFormsStore((s) => s);
  const mainExperienceInputs = experiencesInputs[0];
  const mainTabTitle = getInputValueOrFallback(mainExperienceInputs[0]);

  const formsFilled = experiencesInputs.map((input) =>
    hasFormFilled({
      formGroupKey: "experiencesInputs",
      formsStore: { experiencesInputs: [input] },
    })
  );

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
      <MainExperienceTab hasFormFilled={formsFilled[0]} title={mainTabTitle} />

      {experiencesInputs.slice(1).map((experienceInput, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`${index + 1 === experiencesTabIndex ? s.active : ""} ${
              formsFilled[index + 1] ? s.validForm : s.invalidForm
            }`}
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

            {formsFilled[index + 1] && (
              <span className={`${s.iconHolder} ${s.checkMark}`}>
                <SvgIcon name="checked" />
              </span>
            )}

            {!formsFilled[index + 1] && (
              <span className={`${s.iconHolder} ${s.warning}`}>
                <SvgIcon name="warning" />
              </span>
            )}
          </button>
        );
      })}

      <AddExperienceButton />
    </div>
  );
};

export default ExperienceTabs;
