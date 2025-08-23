import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Experiences from "./Experiences/Experiences";
import s from "./LiveResume3.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import TechSkills from "./TechSkills/TechSkills";

const LiveResume3 = () => {
  return (
    <section className={s.liveResume}>
      <ProfileHeader />
      <Experiences />
      <TechSkills />
      <Education />
      <Certifications />
    </section>
  );
};

export default LiveResume3;
