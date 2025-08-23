import Experiences from "./Experiences/Experiences";
import s from "./LiveResume3.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const LiveResume3 = () => {
  return (
    <section className={s.liveResume}>
      <ProfileHeader />
      <Experiences />
      {/* <TechSkills /> */}
      {/* <Education /> */}
      {/* <Certifications /> */}
    </section>
  );
};

export default LiveResume3;
