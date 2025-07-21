"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import { useRouter } from "next/navigation";
import s from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/experience");
  }

  return (
    <form className={s.personalInfoForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey="personalInfoInputs" />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
