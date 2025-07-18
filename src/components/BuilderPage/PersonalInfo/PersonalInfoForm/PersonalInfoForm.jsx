"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import Input from "@/components/Shared/Inputs/Input/Input";
import useFormsStore from "@/stores/forms.store/forms.store";
import s from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  const { personalInfoInputs, updateInputValue } = useFormsStore((s) => s);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    updateInputValue({ name, value, inputGroupKey: "personalInfoInputs" });
  }

  return (
    <form className={s.personalInfoForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        {personalInfoInputs.map(
          ({
            label,
            name,
            placeholder,
            type,
            required,
            pattern,
            value,
            id,
          }) => {
            return (
              <Input
                key={id}
                label={label}
                name={name}
                placeholder={placeholder}
                type={type}
                required={required}
                value={value}
                pattern={pattern}
                onChange={handleOnChange}
              />
            );
          }
        )}
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
