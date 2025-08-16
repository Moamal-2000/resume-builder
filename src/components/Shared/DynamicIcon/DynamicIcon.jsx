import SvgIcon from "../SvgIcon";
import s from "./DynamicIcon.module.scss";

const DynamicIcon = ({ hasFormFilled, isFormEmpty }) => {
  if (hasFormFilled)
    return (
      <span className={`${s.iconHolder} ${s.checkMark}`}>
        <SvgIcon name="checked" />
      </span>
    );

  return (
    <span className={`${s.iconHolder} ${isFormEmpty ? s.warning : s.error}`}>
      <SvgIcon name="warning" />
    </span>
  );
};

export default DynamicIcon;
