"use client";

import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SvgIcon from "../../SvgIcon";
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
    </div>
  );
};

export default forwardRef(Input);
