"use client";

import useGlobalStore from "@/stores/global.store/global.store";
import s from "./ProgressBar.module.scss";

const ProgressBar = ({ progress, relatedTo }) => {
  const isAsideOpen = useGlobalStore((s) => s.isAsideOpen);
  const shouldShow = relatedTo === "sidebar" ? isAsideOpen : true;

  const hideClass = shouldShow ? "" : s.hide;

  return (
    <div className={`${s.progressBar} ${hideClass}`}>
      <span className={s.title}>Progress</span>

      <div className={s.barWrapper}>
        <div className={s.bar}>
          <div className={s.progress} style={{ width: progress }}></div>
          <div className={s.futureProgress} style={{ width: progress }}></div>
        </div>
        <span className={s.percentage}>{progress}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
