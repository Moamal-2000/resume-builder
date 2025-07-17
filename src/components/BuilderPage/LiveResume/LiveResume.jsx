import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Experiences from "./Experiences/Experiences";
import s from "./LiveResume.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import TechSkills from "./TechSkills/TechSkills";

const LiveResume = () => {
  return (
    <section className={s.liveResume}>
      <div className={s.wrapper}>
        <ProfileHeader />
        <Education />
        <TechSkills />
        <Certifications />
      </div>

      <Experiences />
    </section>
  );
};

export default LiveResume;
