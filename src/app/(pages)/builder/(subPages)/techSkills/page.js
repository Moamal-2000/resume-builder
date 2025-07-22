import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const TechSkillsPage = () => {
  return (
    <BuilderForm
      inputGroupKey="skillsInputs"
      nextPageRoute="/builder/education"
      submitButtonText="Next"
    />
  );
};

export default TechSkillsPage;
