import s from "@/components/BuilderPage/Resumes/ResumePage.module.scss";
import ResumeSelector from "@/components/BuilderPage/Resumes/ResumeSelector/ResumeSelector";

const ResumesPage = () => {
  return (
    <div className={s.resumePage}>
      <ResumeSelector />

      <p className={s.comingSoonMessage}>
        More resumes will be available soon!
      </p>
    </div>
  );
};

export default ResumesPage;
