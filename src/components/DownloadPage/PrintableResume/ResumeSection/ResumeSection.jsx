import ResumeWrapper from "@/components/BuilderPage/BuilderRootLayout/ResumeWrapper/ResumeWrapper";
import s from "./ResumeSection.module.scss";

const ResumeSection = ({ resumeRef }) => {
  return (
    <section className={s.resumeSection} ref={resumeRef}>
      <ResumeWrapper />
    </section>
  );
};

export default ResumeSection;
