import s from "./ResumeLines.module.scss";

const ResumeLines = () => {
  return (
    <>
      <span className={`${s.lines} ${s.top}`} />
      <span className={`${s.lines} ${s.bottom}`} />
    </>
  );
};

export default ResumeLines;
