"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
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

      <div className={s.layer}>
        <div className={s.buttons}>
          <button type="button" title="Select resume">
            <SvgIcon name="checked" />
          </button>

          <button type="button" title="Preview resume">
            <SvgIcon name="eye" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeFrame;
