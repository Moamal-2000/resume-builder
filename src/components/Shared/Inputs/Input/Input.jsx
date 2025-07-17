import s from "./Input.module.scss";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
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
      />
    </div>
  );
};

export default Input;
