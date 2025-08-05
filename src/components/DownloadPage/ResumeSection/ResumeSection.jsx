import LiveResume from "@/components/BuilderPage/LiveResume/LiveResume";
import s from "./ResumeSection.module.scss";

const ResumeSection = () => {
  return (
    <section className={s.resumeSection}>
      <LiveResume />
    </section>
  );
};

export default ResumeSection;
