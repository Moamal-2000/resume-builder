import { RESUMES } from "@/data/staticData";
import ResumeFrame from "./ResumeFrame/ResumeFrame";
import s from "./ResumeSelector.module.scss";

const ResumeSelector = () => {
  return (
    <div className={s.selector}>
      {RESUMES.map((resumeData) => (
        <ResumeFrame resumeData={resumeData} />
      ))}
    </div>
  );
};

export default ResumeSelector;
