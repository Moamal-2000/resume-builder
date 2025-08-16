"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./MainExperienceTab.module.scss";

const MainExperienceTab = ({ formsFilled, title }) => {
  const { updateTabIndex, experiencesTabIndex } = useFormsStore((s) => s);

  return (
    <button
      type="button"
      className={`${s.mainTab} ${experiencesTabIndex === 0 ? s.active : ""} ${
        formsFilled[0] ? "" : s.invalidForm
      }`}
      onClick={() => updateTabIndex(0)}
    >
      {title}

      {formsFilled[0] && (
        <span className={`${s.iconHolder} ${s.checkMark}`}>
          <SvgIcon name="checked" />
        </span>
      )}

      {!formsFilled[0] && (
        <span className={`${s.iconHolder} ${s.warning}`}>
          <SvgIcon name="warning" />
        </span>
      )}
    </button>
  );
};

export default MainExperienceTab;
