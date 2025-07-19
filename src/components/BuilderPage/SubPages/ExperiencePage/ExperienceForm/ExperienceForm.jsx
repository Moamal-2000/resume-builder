"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import { useRouter } from "next/navigation";
import s from "./ExperienceForm.module.scss";
import ExperienceInputs from "./ExperienceInputs/ExperienceInputs";

const ExperienceForm = () => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/techSkills");
  }

  return (
    <form className={s.experienceForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <ExperienceInputs />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default ExperienceForm;
