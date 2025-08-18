import s from "@/components/BuilderPage/SubPages/ExperiencePage/ExperiencePage.module.scss";
import ExperienceTabs from "@/components/BuilderPage/SubPages/ExperiencePage/ExperienceTabs/ExperienceTabs";
import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

export const metadata = {
  title: "Builder | Experience",
};

const Experiencepage = () => {
  return (
    <div className={s.experiencePage}>
      <ExperienceTabs />
      <BuilderForm
        inputGroupKey="experiencesInputs"
        nextPageRoute="/builder/tech-skills"
        submitButtonText="Next"
        hasTabs
      />
    </div>
  );
};

export default Experiencepage;
