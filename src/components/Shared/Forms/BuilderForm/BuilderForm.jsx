"use client";

import AddCertificationField from "@/components/BuilderPage/SubPages/CertificationPage/AddCertificationField/AddCertificationField";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import Button from "../../Buttons/Button/Button";
import BuilderInputs from "../../Inputs/BuilderInputs/BuilderInputs";
import s from "./BuilderForm.module.scss";

const BuilderForm = ({
  inputGroupKey,
  nextPageRoute,
  submitButtonText = "Submit",
  hasAdditionalElements = false,
  hasTabs,
}) => {
  const checkFormValidity = useFormsStore((s) => s.checkFormValidity);
  const router = useRouter();

  const hasElementsClass = hasAdditionalElements ? s.hasElements : "";

  function handleSubmit(event) {
    event.preventDefault();

    const isValidForm = checkFormValidity(inputGroupKey);
    if (!isValidForm) return;

    router.push(nextPageRoute);
  }

  return (
    <form className={`${s.form} ${hasElementsClass}`} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs inputGroupKey={inputGroupKey} hasTabs={hasTabs} />
      </div>

      {hasAdditionalElements && (
        <div className={s.additionalElements}>
          <AddCertificationField />
        </div>
      )}

      <Button fillWidth={true} type="submit">
        {submitButtonText}
      </Button>
    </form>
  );
};

export default BuilderForm;
