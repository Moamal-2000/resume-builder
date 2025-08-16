import SvgIcon from "../SvgIcon";
import s from "./DynamicIcon.module.scss";

const DynamicIcon = ({ hasFormFilled, isFormEmpty }) => {
  const formStatus = hasFormFilled
    ? "completely filled"
    : isFormEmpty
    ? "Empty"
    : "partially filled";

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

      <p className={s.tooltip}>The form is {formStatus}</p>
    </div>
  );
};

export default DynamicIcon;
