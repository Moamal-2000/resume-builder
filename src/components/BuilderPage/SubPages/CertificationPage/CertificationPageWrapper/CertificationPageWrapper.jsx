"use client";

import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";
import { CERTIFICATION_MAX_COUNT } from "@/data/constants";
import { newCertificationFields } from "@/data/fields";
import { getResumeProgress } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";

const CertificationPageWrapper = () => {
  const formsStore = useFormsStore((s) => s);
  const resumeProgress = getResumeProgress(formsStore);

  return (
    <BuilderForm
      inputGroupKey="certificationInputs"
      nextPageRoute="/download"
      hasAdditionalElements
      addFieldInfo={{
        label: "Add Certification / License",
        limitation: CERTIFICATION_MAX_COUNT,
        fieldData: newCertificationFields,
      }}
      canSubmit={resumeProgress === "100%"}
    />
  );
};

export default CertificationPageWrapper;
