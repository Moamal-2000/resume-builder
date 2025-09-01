import Experiences from "./Experiences/Experiences";
import s from "./LiveResume4.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import TechSkills from "./TechSkills/TechSkills";

const LiveResume4 = () => {
  return (
    <section className={s.liveResume}>
      <ProfileHeader />
      <Experiences />
      <TechSkills />
      {/* <Education /> */}
      {/* <Certifications /> */}
    </section>
  );
};

export default LiveResume4;
