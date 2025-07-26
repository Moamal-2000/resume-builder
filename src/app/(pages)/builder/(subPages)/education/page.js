import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

export const metadata = {
  title: "Builder | Education",
};

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
