"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import { useRouter } from "next/navigation";
import s from "./TechSkillsForm.module.scss";
import TechSkillsInputs from "./TechSkillsInputs/TechSkillsInputs";

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
        <TechSkillsInputs />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default TechSkillsForm;
