"use client";

import { useRef } from "react";
import s from "./PrintableResume.module.scss";
import ResumeDownloadSuccess from "./ResumeDownloadSuccess/ResumeDownloadSuccess";
import ResumeSection from "./ResumeSection/ResumeSection";

const PrintableResume = () => {
  const resumeRef = useRef();

  return (
    <div className={s.printWrapper}>
      <ResumeDownloadSuccess resumeRef={resumeRef} />
      <ResumeSection resumeRef={resumeRef} />
    </div>
  );
};

export default PrintableResume;
