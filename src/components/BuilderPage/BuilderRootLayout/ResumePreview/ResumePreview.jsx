"use client";

import { RESUMES } from "@/data/staticData";
import useGlobalStore from "@/stores/global.store/global.store";
import s from "./ResumePreview.module.scss";

const ResumePreview = () => {
  const { selectedPreviewResume, isResumePreviewActive } = useGlobalStore(
    (s) => s
  );

  if (!isResumePreviewActive) return null;

  const selectedResumeData = RESUMES.find(
    (resume) => resume.name === selectedPreviewResume
  );

  return <div className={s.preview}>{selectedResumeData.component}</div>;
};

export default ResumePreview;
