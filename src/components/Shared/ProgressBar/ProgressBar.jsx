"use client";

import useGlobalStore from "@/stores/global.store/global.store";
import { useEffect, useRef, useState } from "react";
import s from "./ProgressBar.module.scss";

const ProgressBar = ({ progress, relatedTo }) => {
  const isAsideOpen = useGlobalStore((s) => s.isAsideOpen);
  const shouldShow = relatedTo === "sidebar" ? isAsideOpen : true;
  const hideClass = shouldShow ? "" : s.hide;
  const previousProgress = useRef(progress);
  const [progressDecrease, setProgressDecrease] = useState(false);

  const decreaseClass = progressDecrease ? s.decrease : "";

  useEffect(() => {
    const isProgressDecreased =
      parseInt(progress) < parseInt(previousProgress.current);

    setProgressDecrease(isProgressDecreased);

    if (progress !== previousProgress.current) {
      previousProgress.current = progress;
    }
  }, [progress]);

  return (
    <div className={`${s.progressBar} ${hideClass} ${decreaseClass}`}>
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
