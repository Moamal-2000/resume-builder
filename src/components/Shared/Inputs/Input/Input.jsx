"use client";

import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SvgIcon from "../../SvgIcon";
import ValidationMessage from "../../ValidationMessage/ValidationMessage";
import Checkbox from "../Checkbox/Checkbox";
import Textarea from "../Textarea/Textarea";
import s from "./Input.module.scss";
import RemoveButton from "./RemoveButton/RemoveButton";

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
    id,
    hasRemoveIcon = false,
    inputGroupKey,
    warningMessage,
    hasValidValue,
    hasFormSubmitOnce,
  },
  ref
) => {
  const shouldShowWarning =
    warningMessage && !hasValidValue && hasFormSubmitOnce;
  const invalidClass = shouldShowWarning ? s.invalid : "";

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
        warningMessage={warningMessage}
        hasValidValue={hasValidValue}
      />
    );

  return (
    <div className={`${s.input} ${invalidClass}`}>
      {label && (
        <label htmlFor={name} data-required={required}>
          {label}
        </label>
      )}

      {type === "month" && (
        <DatePicker
          showIcon
          icon={<SvgIcon name="calendar" />}
          selected={value}
          showMonthYearPicker
          dateFormat="MMMM yyyy"
          autoComplete="off"
          name={name}
          id={name}
          placeholderText={placeholder}
          minDate={min}
          maxDate={max}
          required={required}
          disabled={disabled}
          focusSelectedMonth
          ref={ref}
          onChange={(value, event) => {
            onChange({ name, value });
            if (value === null) event.target.click();
          }}
          onKeyDown={(event) => {
            const value = event.target.value;
            if (value === "") event.preventDefault();
          }}
        />
      )}

      {type !== "month" && (
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
      )}

      {hasRemoveIcon && (
        <RemoveButton inputGroupKey={inputGroupKey} fieldId={id} />
      )}

      <ValidationMessage showMessage={shouldShowWarning}>
        {warningMessage}
      </ValidationMessage>
    </div>
  );
};

export default forwardRef(Input);
