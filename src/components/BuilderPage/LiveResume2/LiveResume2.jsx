import s from "./LiveResume2.module.scss";
import ResumeLines from "./ResumeLines/ResumeLines";

const LiveResume2 = () => {
  return (
    <section className={s.liveResume}>
      <ResumeLines />
      {/* <ProfileHeader /> */}
      {/* <TechSkills /> */}
      {/* <Education /> */}
      {/* <Certifications /> */}
      {/* <Experiences /> */}
    </section>
  );
};

export default LiveResume2;
