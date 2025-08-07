import s from "./PrintableResume.module.scss";
import ResumeDownloadSuccess from "./ResumeDownloadSuccess/ResumeDownloadSuccess";
import ResumeSection from "./ResumeSection/ResumeSection";

const PrintableResume = () => {
  return (
    <div className={s.printWrapper}>
      <ResumeDownloadSuccess />
      <ResumeSection />
    </div>
  );
};

export default PrintableResume;
