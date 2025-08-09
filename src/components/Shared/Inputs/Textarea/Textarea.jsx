import ValidationMessage from "../../ValidationMessage/ValidationMessage";
import s from "./Textarea.module.scss";

const Textarea = ({
  label,
  name,
  value,
  onChange,
  required,
  disabled,
  placeholder,
  warningMessage,
  hasValidValue,
}) => {
  const shouldShowWarning = warningMessage && !hasValidValue;
  const invalidClass = shouldShowWarning ? s.invalid : "";

  return (
    <div className={`${s.textarea} ${invalidClass}`}>
      {label && (
        <label htmlFor={name} data-required={required}>
          {label}
        </label>
      )}

      <textarea
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      ></textarea>

      <ValidationMessage showMessage={shouldShowWarning}>
        {warningMessage}
      </ValidationMessage>
    </div>
  );
};

export default Textarea;
