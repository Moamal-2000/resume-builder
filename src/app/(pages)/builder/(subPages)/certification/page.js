import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";
import { CERTIFICATION_MAX_COUNT } from "@/data/constants";
import { newCertificationField } from "@/data/fields";

export const metadata = {
  title: "Builder | Certification",
};

const CertificationPage = () => {
  return (
    <BuilderForm
      inputGroupKey="certificationInputs"
      nextPageRoute="/download"
      hasAdditionalElements
      addFieldInfo={{
        label: "Add Certification / License",
        limitation: CERTIFICATION_MAX_COUNT,
        fieldData: newCertificationField,
      }}
    />
  );
};

export default CertificationPage;
