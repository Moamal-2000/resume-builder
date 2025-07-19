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
        {experienceInputs.map((dataCell, index) => {
          const isArray = Array.isArray(dataCell);

          if (isArray) {
            return (
              <div className={s.wrapper} key={`inputs-wrapper-${index}`}>
                {dataCell.map((dataCell) => {
                  return (
                    <Input
                      key={dataCell.id}
                      {...dataCell}
                      onChange={handleOnChange}
                      fillWidth={true}
                    />
                  );
                })}
              </div>
            );
          }

          return (
            <Input key={dataCell.id} {...dataCell} onChange={handleOnChange} />
          );
        })}
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default ExperienceForm;
