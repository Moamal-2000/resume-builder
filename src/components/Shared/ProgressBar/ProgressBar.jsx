import s from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }) => {
  return (
    <div className={s.progressBar}>
      <span className={s.title}>Progress</span>

      <div className={s.barWrapper}>
        <div className={s.bar}>
          <div className={s.progress} style={{ width: progress }}></div>
        </div>
        <span className={s.percentage}>{progress}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
