import SvgIcon from "../../SvgIcon";
import s from "./Input.module.scss";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  pattern,
  required,
  fillWidth = false,
}) => {
  if (type === "checkbox")
    return (
      <div className={`${s.checkboxWrapper}`}>
        <div className={s.checkbox}>
          <input
            type={type}
            name={name}
            id={name}
            checked={value}
            value={value}
            onChange={onChange}
            required={required}
            pattern={pattern}
          />
          {type === "checkbox" && (
            <div className={s.icon}>
              <SvgIcon name="correctMark" />
            </div>
          )}
        </div>

        {label && (
          <label htmlFor={name} data-required={required}>
            {label}
          </label>
        )}
      </div>
    );

  return (
    <div className={s.input}>
      {label && (
        <label htmlFor={name} data-required={required}>
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        style={{ minWidth: fillWidth ? "100%" : "352px" }}
      />
    </div>
  );
};

export default Input;
