import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const EducationPages = () => {
  return (
    <BuilderForm
      inputGroupKey="educationInputs"
      nextPageRoute="/builder/contactInfo"
      submitButtonText="Next"
    />
  );
};

export default EducationPages;
