import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

export const metadata = {
  title: "Builder | Personal Information",
};

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
