"use client";

import { useFormsStore } from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../Buttons/Button/Button";
import BuilderInputs from "../../Inputs/BuilderInputs/BuilderInputs";
import AdditionalFormElements from "./AdditionalFormElements/AdditionalFormElements";
import s from "./BuilderForm.module.scss";

const BuilderForm = ({
  inputGroupKey,
  nextPageRoute,
  submitButtonText = "Submit",
  hasAdditionalElements = false,
  hasTabs,
  addFieldInfo,
  canSubmit = true,
}) => {
  const { checkFormValidity, addField, addFields } = useFormsStore((s) => s);
  const router = useRouter();
  const isFieldDataArray = Array.isArray(addFieldInfo?.fieldData);
  const [hasFormSubmitOnce, setHasFormSubmitOnce] = useState(false);

  const hasElementsClass = hasAdditionalElements ? s.hasElements : "";

  function handleSubmit(event) {
    setHasFormSubmitOnce(true);

    event.preventDefault();
    if (!canSubmit) return;

    const isValidForm = checkFormValidity(inputGroupKey);
    if (!isValidForm) return;

    router.push(nextPageRoute);
  }

  return (
    <form className={`${s.form} ${hasElementsClass}`} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <BuilderInputs
          inputGroupKey={inputGroupKey}
          hasTabs={hasTabs}
          hasFormSubmitOnce={hasFormSubmitOnce}
        />
      </div>

      <AdditionalFormElements
        hasAdditionalElements={hasAdditionalElements}
        addFieldInfo={addFieldInfo}
        addField={isFieldDataArray ? addFields : addField}
        inputGroupKey={inputGroupKey}
        isFieldDataArray={isFieldDataArray}
      />

      <Button fillWidth={true} type="submit">
        {submitButtonText}
      </Button>
    </form>
  );
};

export default BuilderForm;
