"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import { useRouter } from "next/navigation";
import s from "./TechSkillsForm.module.scss";

const TechSkillsForm = () => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/education");
  }

  return (
    <form className={s.techSkillsForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey="skillsInputs" />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default TechSkillsForm;
