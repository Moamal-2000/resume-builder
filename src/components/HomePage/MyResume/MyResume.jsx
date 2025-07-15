import Education from "./Education/Education";
import s from "./MyResume.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import TechSkills from "./TechSkills/TechSkills";

const MyResume = () => {
  return (
    <section className={s.myResume}>
      <ProfileHeader />
      <Education />
      <TechSkills />
    </section>
  );
};

export default MyResume;
