import Certifications from "./Certifications/Certifications";
import Education from "./Education/Education";
import Experiences from "./Experiences/Experiences";
import s from "./MyResume.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import TechSkills from "./TechSkills/TechSkills";

const MyResume = () => {
  return (
    <section className={s.myResume}>
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

export default MyResume;
