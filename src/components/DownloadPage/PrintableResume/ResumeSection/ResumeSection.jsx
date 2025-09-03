import LiveResume from "@/components/BuilderPage/Resumes/LiveResume/LiveResume";
import s from "./ResumeSection.module.scss";

const ResumeSection = ({ resumeRef }) => {
  return (
    <section className={s.resumeSection} ref={resumeRef}>
      <LiveResume />
    </section>
  );
};

export default ResumeSection;
