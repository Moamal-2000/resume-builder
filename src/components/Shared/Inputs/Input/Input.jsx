import Checkbox from "../Checkbox/Checkbox";
import Textarea from "../Textarea/Textarea";
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
    return <Checkbox {...{ label, name, value, onChange, required }} />;

  if (type === "textarea")
    return (
      <Textarea {...{ label, name, value, onChange, required, placeholder }} />
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
