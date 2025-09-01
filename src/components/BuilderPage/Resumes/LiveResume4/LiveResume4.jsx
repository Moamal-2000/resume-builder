import Experiences from "./Experiences/Experiences";
import s from "./LiveResume4.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const LiveResume4 = () => {
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

export default LiveResume4;
