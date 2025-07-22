"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import s from "./EducationForm.module.scss";

const EducationForm = () => {
  const educationInputs = useFormsStore((s) => s.educationInputs);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = educationInputs.every((input) => input.hasValidValue);
    if (!isValidForm) return;

    router.push("/builder/contactInfo");
  }

  return (
    <form className={s.educationForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey="educationInputs" />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default EducationForm;
