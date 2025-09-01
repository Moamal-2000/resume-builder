import SelectedResume from "@/components/BuilderPage/BuilderRootLayout/SelectedResume/SelectedResume";
import s from "./ResumeSection.module.scss";

const ResumeSection = ({ resumeRef }) => {
  return (
    <section className={s.resumeSection} ref={resumeRef}>
      <SelectedResume />
    </section>
  );
};

export default ResumeSection;
