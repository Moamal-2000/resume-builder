"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { experienceTabClasses } from "@/data/classNames";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ExperienceTab.module.scss";

const ExperienceTab = ({
  handleRemoveExperience,
  handleTabClick,
  hasFormFilled,
  title,
  index,
}) => {
  const { experiencesTabIndex } = useFormsStore((s) => s);

  const classes = experienceTabClasses({
    cssModule: s,
    activeIndex: experiencesTabIndex,
    hasFormFilled,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={(event) => handleTabClick(event, index)}
    >
      {title}
      <span
        className={s.xMark}
        onClick={(event) => handleRemoveExperience(event, index)}
        title="Remove experience"
      >
        <SvgIcon name="xMark" />
      </span>

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
  );
};

export default ExperienceTab;
