import Image from "next/image";
import s from "./ResumeFrame.module.scss";

const ResumeFrame = ({ resumeData: { name, imagePath, id } }) => {
  return (
    <div className={s.resumeFrame} key={id}>
      <Image src={imagePath} alt="Resume template" width={350} height={360} />
      <input type="radio" name="resume" value={name} />
    </div>
  );
};

export default ResumeFrame;
