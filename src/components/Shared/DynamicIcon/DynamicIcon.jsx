"use client";

import { useState } from "react";
import FormTabToolTip from "../FormTabToolTip/FormTabToolTip";
import SvgIcon from "../SvgIcon";
import s from "./DynamicIcon.module.scss";

const DynamicIcon = ({ hasFormFilled, isFormEmpty, ariaDescribedby }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className={s.mainWrapper}
      aria-describedby={ariaDescribedby}
      tabIndex="0"
      onFocus={() => setIsTooltipVisible(true)}
      onBlur={() => setIsTooltipVisible(false)}
    >
      {hasFormFilled && (
        <span
          className={`${s.iconHolder} ${s.checkMark}`}
          aria-label="Form status"
        >
          <SvgIcon name="checked" />
        </span>
      )}

      {!hasFormFilled && (
        <span
          className={`${s.iconHolder} ${isFormEmpty ? s.warning : s.error}`}
          aria-label="Form status"
        >
          <SvgIcon name="warning" />
        </span>
      )}

      <FormTabToolTip
        hasFormFilled={hasFormFilled}
        isFormEmpty={isFormEmpty}
        id={ariaDescribedby}
        isTooltipVisible={isTooltipVisible}
      />
    </div>
  );
};

export default DynamicIcon;
