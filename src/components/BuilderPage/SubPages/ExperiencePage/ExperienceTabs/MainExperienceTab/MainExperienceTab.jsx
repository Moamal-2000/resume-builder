"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { experienceTabClasses } from "@/data/classNames";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./MainExperienceTab.module.scss";

const MainExperienceTab = ({ hasFormFilled, title }) => {
  const { updateTabIndex, experiencesTabIndex } = useFormsStore((s) => s);

  const classes = experienceTabClasses({
    cssModule: s,
    activeIndex: experiencesTabIndex,
    hasFormFilled,
  });

  return (
    <button type="button" className={classes} onClick={() => updateTabIndex(0)}>
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
  );
};

export default MainExperienceTab;
