"use client";

import { useFormsStore } from "@/stores/forms.store/forms.store";
import Image from "next/image";
import s from "./ResumeFrame.module.scss";

const ResumeFrame = ({ resumeData: { name, imagePath } }) => {
  const updateSelectedResume = useFormsStore((s) => s.updateSelectedResume);

  return (
    <div className={s.resumeFrame}>
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
