import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Experiences from "./Experiences/Experiences";
import s from "./LiveResume2.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ResumeLines from "./ResumeLines/ResumeLines";
import TechSkills from "./TechSkills/TechSkills";

const LiveResume2 = () => {
  return (
    <section className={s.liveResume}>
      <ResumeLines />
      <ProfileHeader />

      <div className={s.wrapper}>
        <Experiences />
        <TechSkills />
        <Education />
        <Certifications />
      </div>
    </section>
  );
};

export default LiveResume2;
