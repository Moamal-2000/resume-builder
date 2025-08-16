"use client";

import { getInputValueOrFallback, hasFormFilled } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import AddExperienceButton from "./AddExperienceButton/AddExperienceButton";
import ExperienceTab from "./ExperienceTab/ExperienceTab";
import s from "./ExperienceTabs.module.scss";
import MainExperienceTab from "./MainExperienceTab/MainExperienceTab";

const ExperienceTabs = () => {
  const { updateTabIndex, experiencesInputs, experiencesTabIndex } =
    useFormsStore((s) => s);
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
    const sameTabClicked = experiencesTabIndex === index;
    const removeIconClicked =
      clickedTagName === "svg" || clickedTagName === "path";

    if (removeIconClicked || sameTabClicked) return false;

    updateTabIndex(index);
  }

  return (
    <div className={s.experienceTabs}>
      <MainExperienceTab
        hasFormFilled={formsFilled[0]}
        title={mainTabTitle}
        index={0}
      />

      {experiencesInputs.slice(1).map((experienceInput, index) => {
        return (
          <ExperienceTab
            handleTabClick={handleTabClick}
            title={getInputValueOrFallback(experienceInput[0])}
            hasFormFilled={formsFilled[index + 1]}
            key={index}
            index={index + 1}
          />
        );
      })}

      <AddExperienceButton />
    </div>
  );
};

export default ExperienceTabs;
