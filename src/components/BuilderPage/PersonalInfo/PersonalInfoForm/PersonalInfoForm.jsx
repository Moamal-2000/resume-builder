"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import s from "./PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  const personalInfoInputs = useFormsStore((s) => s.personalInfoInputs);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = personalInfoInputs.every(
      (input) => input.hasValidValue
    );
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
