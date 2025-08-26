import { RESUMES } from "@/data/staticData";
import Image from "next/image";
import s from "./ResumeSelector.module.scss";

const ResumeSelector = () => {
  return (
    <div className={s.selector}>
      {RESUMES.map(({ name, imagePath, id }) => (
        <div className={s.resumeFrame} key={id}>
          <Image
            src={imagePath}
            alt="Resume template"
            width={134}
            height={160}
          />
          <input type="radio" name="resume" value={name} />
        </div>
      ))}
    </div>
  );
};

export default ResumeSelector;
