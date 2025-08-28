"use client";

import useGlobalStore from "@/stores/global.store/global.store";
import Image from "next/image";
import s from "./ResumeFrame.module.scss";

const ResumeFrame = ({ resumeData: { name, imagePath } }) => {
  const { selectedResume, updateSelectedResume } = useGlobalStore((s) => s);
  const activeClass = selectedResume === name ? s.active : "";

  return (
    <div className={`${s.resumeFrame} ${activeClass}`}>
      <Image src={imagePath} alt="Resume template" width={350} height={360} />
      <input
        type="radio"
        name="resume"
        value={name}
        onChange={() => updateSelectedResume(name)}
      />
    </div>
  );
};

export default ResumeFrame;
