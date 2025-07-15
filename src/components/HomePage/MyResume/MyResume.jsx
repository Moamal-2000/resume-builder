import s from "./MyResume.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const MyResume = () => {
  return (
    <section className={s.myResume}>
      <ProfileHeader />
    </section>
  );
};

export default MyResume;
