import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const Experiencepage = () => {
  return (
    <BuilderForm
      inputGroupKey="experienceInputs"
      nextPageRoute="/builder/techSkills"
      submitButtonText="Next"
    />
  );
};

export default Experiencepage;
