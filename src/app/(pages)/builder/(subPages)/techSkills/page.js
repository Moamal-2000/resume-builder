import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const TechSkillsPage = () => {
  return (
    <BuilderForm
      inputGroupKey="techSkillsInputs"
      nextPageRoute="/builder/education"
      submitButtonText="Next"
    />
  );
};

export default TechSkillsPage;
