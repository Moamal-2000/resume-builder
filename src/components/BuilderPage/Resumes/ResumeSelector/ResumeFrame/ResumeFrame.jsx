"use client";

import useGlobalStore from "@/stores/global.store/global.store";
import Image from "next/image";
import s from "./ResumeFrame.module.scss";
import ResumeFrameLayer from "./ResumeFrameLayer/ResumeFrameLayer";

const ResumeFrame = ({ resumeData: { name, imagePath } }) => {
  const selectedResume = useGlobalStore((s) => s.selectedResume);
  const activeClass = selectedResume === name ? s.active : "";

  return (
    <div className={`${s.resumeFrame} ${activeClass}`}>
      <Image src={imagePath} alt="Resume template" width={350} height={360} />
      <ResumeFrameLayer resumeName={name} />
    </div>
  );
};

export default ResumeFrame;
