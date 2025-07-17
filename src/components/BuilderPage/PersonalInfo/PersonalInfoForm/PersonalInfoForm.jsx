"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import Input from "@/components/Shared/Inputs/Input/Input";
import { PERSONAL_INFO_INPUTS } from "@/data/builderFormsData";
import s from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className={s.personalInfoForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        {PERSONAL_INFO_INPUTS.map(({ label, name, placeholder, type, id }) => (
          <Input
            key={id}
            label={label}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        ))}
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
