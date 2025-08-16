import FormTabToolTip from "../FormTabToolTip/FormTabToolTip";
import SvgIcon from "../SvgIcon";
import s from "./DynamicIcon.module.scss";

const DynamicIcon = ({ hasFormFilled, isFormEmpty }) => {
  return (
    <div className={s.mainWrapper}>
      {hasFormFilled && (
        <span className={`${s.iconHolder} ${s.checkMark}`}>
          <SvgIcon name="checked" />
        </span>
      )}

      {!hasFormFilled && (
        <span
          className={`${s.iconHolder} ${isFormEmpty ? s.warning : s.error}`}
        >
          <SvgIcon name="warning" />
        </span>
      )}

      <FormTabToolTip
        hasFormFilled={hasFormFilled}
        isFormEmpty={isFormEmpty}
        id="form-status-tooltip"
      />
    </div>
  );
};

export default DynamicIcon;
