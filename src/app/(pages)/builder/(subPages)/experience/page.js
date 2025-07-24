import s from "@/components/BuilderPage/SubPages/ExperiencePage/ExperiencePage.module.scss";
import ExperienceTabs from "@/components/BuilderPage/SubPages/ExperiencePage/ExperienceTabs/ExperienceTabs";
import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

const Experiencepage = () => {
  return (
    <div className={s.experiencePage}>
      <ExperienceTabs />
      <BuilderForm
        inputGroupKey="experienceInputs"
        nextPageRoute="/builder/techSkills"
        submitButtonText="Next"
        hasTabs
      />
    </div>
  );
};

export default Experiencepage;
