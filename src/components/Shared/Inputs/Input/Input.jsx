import { forwardRef } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Textarea from "../Textarea/Textarea";
import s from "./Input.module.scss";

const Input = (
  {
    label,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    required,
    disabled = false,
    fillWidth = false,
    min,
    max,
  },
  ref
) => {
  if (type === "checkbox")
    return (
      <Checkbox
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    );

  if (type === "textarea")
    return (
      <Textarea
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        min={min}
        max={max}
      />
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
        disabled={disabled}
        required={required}
        style={{ minWidth: fillWidth ? "100%" : "352px" }}
        min={min}
        max={max}
        ref={ref}
        title={disabled ? "Disabled input" : ""}
      />
    </div>
  );
};

export default forwardRef(Input);
