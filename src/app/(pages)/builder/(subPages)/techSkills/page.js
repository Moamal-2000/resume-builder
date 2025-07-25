import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";
import { SKILLS_MAX_COUNT } from "@/data/constents";
import { newSkillField } from "@/data/fields";

const TechSkillsPage = () => {
  return (
    <BuilderForm
      inputGroupKey="techSkillsInputs"
      nextPageRoute="/builder/education"
      submitButtonText="Next"
      hasAdditionalElements
      addFieldInfo={{
        label: "Add Skill",
        limitation: SKILLS_MAX_COUNT,
        fieldData: newSkillField,
      }}
    />
  );
};

export default TechSkillsPage;
