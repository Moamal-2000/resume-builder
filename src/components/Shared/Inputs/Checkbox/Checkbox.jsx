import SvgIcon from "../../SvgIcon";
import s from "./Checkbox.module.scss";

const Checkbox = ({ label, name, value, onChange, required }) => {
  return (
    <div className={`${s.checkboxWrapper}`}>
      <div className={s.checkbox}>
        <input
          type={"checkbox"}
          name={name}
          id={name}
          checked={value}
          value={value}
          onChange={onChange}
          required={required}
        />
        <div className={s.icon}>
          <SvgIcon name="correctMark" />
        </div>
      </div>

      {label && (
        <label htmlFor={name} data-required={required}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
