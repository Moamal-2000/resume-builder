import SvgIcon from "../../SvgIcon";
import s from "./AddFieldButton.module.scss";

const AddFieldButton = ({ label, onClick }) => {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      <div className={s.icon}>
        <SvgIcon name="plus" />
      </div>
      <span>{label}</span>
    </button>
  );
};

export default AddFieldButton;
