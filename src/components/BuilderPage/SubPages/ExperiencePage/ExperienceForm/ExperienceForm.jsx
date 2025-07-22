"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import s from "./ExperienceForm.module.scss";

const ExperienceForm = () => {
  const experienceInputs = useFormsStore((s) => s.experienceInputs);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = experienceInputs.every((input) => input.hasValidValue);

    if (!isValidForm) return;

    router.push("/builder/techSkills");
  }

  return (
    <form className={s.experienceForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey="experienceInputs" />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default ExperienceForm;
