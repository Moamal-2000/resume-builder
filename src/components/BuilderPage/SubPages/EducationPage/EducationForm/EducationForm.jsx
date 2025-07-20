"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import { useRouter } from "next/navigation";
import s from "./EducationForm.module.scss";
import EducationsInputs from "./EducationsInputs/EducationsInputs";

const EducationForm = () => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/contactInfo");
  }

  return (
    <form className={s.educationForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <EducationsInputs />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default EducationForm;
