"use client";

import DynamicIcon from "@/components/Shared/DynamicIcon/DynamicIcon";
import { experienceTabClasses } from "@/data/classNames";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./MainExperienceTab.module.scss";

const MainExperienceTab = ({ hasFormFilled, title, index }) => {
  const { updateTabIndex, experiencesTabIndex, experiencesInputs } =
    useFormsStore((s) => s);
  const isFormEmpty = experiencesInputs[index].every((input) => !input.value);

  const classes = experienceTabClasses({
    cssModule: s,
    activeIndex: experiencesTabIndex,
    index,
    hasFormFilled,
  });

  return (
    <div className={s.tabWrapper}>
      <button
        type="button"
        className={classes}
        onClick={() => updateTabIndex(0)}
      >
        {title}
      </button>

      <DynamicIcon isFormEmpty={isFormEmpty} hasFormFilled={hasFormFilled} />
    </div>
  );
};

export default MainExperienceTab;
