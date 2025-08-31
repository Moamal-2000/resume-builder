import Education from "./Education/Education";
import Experiences from "./Experiences/Experiences";
import s from "./LiveResume3.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const LiveResume3 = () => {
  return (
    <section className={s.liveResume}>
      <ProfileHeader />
      <Experiences />
      <Education />
      {/* <TechSkills /> */}
      {/* <Certifications /> */}
    </section>
  );
};

export default LiveResume3;
