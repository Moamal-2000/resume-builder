"use client";

import DynamicIcon from "@/components/Shared/DynamicIcon/DynamicIcon";
import SvgIcon from "@/components/Shared/SvgIcon";
import { experienceTabClasses } from "@/data/classNames";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTab.module.scss";

const ExperienceTab = ({ handleTabClick, hasFormFilled, title, index }) => {
  const { experiencesTabIndex, removeExperience, experiencesInputs } =
    useFormsStore((s) => s);
  const isFormEmpty = experiencesInputs[index].every((input) => !input.value);

  const tabWrapperClasses = experienceTabClasses({
    cssModule: s,
    activeIndex: experiencesTabIndex,
    index,
    hasFormFilled,
  });

  return (
    <div className={tabWrapperClasses}>
      <button
        type="button"
        className={s.tabButton}
        onClick={(event) => handleTabClick(event, index)}
      >
        {title}

        <DynamicIcon
          isFormEmpty={isFormEmpty}
          hasFormFilled={hasFormFilled}
          ariaDescribedby="form-status-tooltip"
        />
      </button>

      <button
        type="button"
        className={s.removeButton}
        onClick={() => removeExperience(index)}
        title="Remove experience"
      >
        <SvgIcon name="xMark" />
      </button>
    </div>
  );
};

export default ExperienceTab;
