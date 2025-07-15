import Education from "./Education/Education";
import s from "./MyResume.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const MyResume = () => {
  return (
    <section className={s.myResume}>
      <ProfileHeader />
      <Education />
    </section>
  );
};

export default MyResume;
