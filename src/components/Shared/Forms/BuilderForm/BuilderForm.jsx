"use client";

import useFormsStore from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import Button from "../../Buttons/Button/Button";
import BuilderInputs from "../../Inputs/BuilderInputs/BuilderInputs";
import s from "./BuilderForm.module.scss";

const BuilderForm = ({
  inputGroupKey,
  nextPageRoute,
  submitButtonText = "Submit",
}) => {
  const inputs = useFormsStore((s) => s[inputGroupKey]);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = inputs.every(
      (input) => input.hasValidValue || !input.required
    );
    if (!isValidForm) return;

    router.push(nextPageRoute);
  }

  return (
    <form className={s.certificationForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey={inputGroupKey} />
      </div>

      <Button fillWidth={true} type="submit">
        {submitButtonText}
      </Button>
    </form>
  );
};

export default BuilderForm;
