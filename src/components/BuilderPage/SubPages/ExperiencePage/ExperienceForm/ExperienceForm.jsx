"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import Input from "@/components/Shared/Inputs/Input/Input";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import s from "./ExperienceForm.module.scss";

const ExperienceForm = () => {
  const { experienceInputs, updateInputValue } = useFormsStore((s) => s);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/techSkills");
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    const isValidValue = event.target.validity.valid;

    updateInputValue({
      name,
      value,
      isValidValue,
      inputGroupKey: "experienceInputs",
    });
  }

  return (
    <form className={s.experienceForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        {experienceInputs.map(
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

export default ExperienceForm;
