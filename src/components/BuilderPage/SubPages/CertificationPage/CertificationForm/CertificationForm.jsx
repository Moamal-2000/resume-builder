"use client";

import Button from "@/components/Shared/Buttons/Button/Button";
import BuilderInputs from "@/components/Shared/Inputs/BuilderInputs/BuilderInputs";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import s from "./CertificationForm.module.scss";

const CertificationForm = () => {
  const certificationInputs = useFormsStore((s) => s.certificationInputs);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = certificationInputs.every(
      (input) => input.hasValidValue
    );
    if (!isValidForm) return;

    router.push("/download");
  }

  return (
    <form className={s.certificationForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey="certificationInputs" />
      </div>

      <Button fillWidth={true} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CertificationForm;
