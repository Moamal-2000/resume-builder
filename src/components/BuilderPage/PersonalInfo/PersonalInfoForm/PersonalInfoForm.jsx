"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import Input from "@/components/Shared/Inputs/Input/Input";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import s from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  const { personalInfoInputs, updateInputValue } = useFormsStore((s) => s);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/experience");
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    const isValidValue = event.target.validity.valid;

    updateInputValue({
      name,
      value,
      isValidValue,
      inputGroupKey: "personalInfoInputs",
    });
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
