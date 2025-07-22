import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const BuilderPage = () => {
  return (
    <BuilderForm
      inputGroupKey="personalInfoInputs"
      nextPageRoute="/builder/experience"
      submitButtonText="Next"
    />
  );
};

export default BuilderPage;
