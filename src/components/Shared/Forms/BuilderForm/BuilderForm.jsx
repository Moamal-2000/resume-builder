"use client";

import { CERTIFICATION_MAX_COUNT } from "@/data/constents";
import { newCertificationField } from "@/data/fields";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import { useRouter } from "next/navigation";
import AddFieldButton from "../../Buttons/AddFieldButton/AddFieldButton";
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
  const { checkFormValidity, addField } = useFormsStore((s) => s);
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
          <AddFieldButton
            label="Add Certification / License"
            onClick={() =>
              addField({
                inputGroupKey,
                limitation: CERTIFICATION_MAX_COUNT,
                fieldData: newCertificationField,
              })
            }
          />
        </div>
      )}

      <Button fillWidth={true} type="submit">
        {submitButtonText}
      </Button>
    </form>
  );
};

export default BuilderForm;
