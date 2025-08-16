"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { experienceTabClasses } from "@/data/classNames";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTab.module.scss";

const ExperienceTab = ({ handleTabClick, hasFormFilled, title, index }) => {
  const { experiencesTabIndex, removeExperience } = useFormsStore((s) => s);

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

        {hasFormFilled && (
          <span className={`${s.iconHolder} ${s.checkMark}`}>
            <SvgIcon name="checked" />
          </span>
        )}

        {!hasFormFilled && (
          <span className={`${s.iconHolder} ${s.warning}`}>
            <SvgIcon name="warning" />
          </span>
        )}
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
