"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import { useRouter } from "next/navigation";
import s from "./ContactInfoForm.module.scss";

const ContactInfoForm = () => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = event.target.checkValidity();
    if (!isValidForm) return;

    router.push("/builder/certification");
  }

  return (
    <form className={s.contactInfoForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey="contactInfoInputs" />
      </div>

      <Button fillWidth={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default ContactInfoForm;
