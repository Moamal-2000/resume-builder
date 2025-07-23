import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const CertificationPage = () => {
  return (
    <BuilderForm
      inputGroupKey="certificationInputs"
      nextPageRoute="/download"
      hasAdditionalElements
    />
  );
};

export default CertificationPage;
