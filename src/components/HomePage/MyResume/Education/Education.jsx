import s from "./Education.module.scss";

const Education = () => {
  return (
    <section className={s.education}>
      <h2>Education</h2>

      <div className={s.educationContent}>
        <p className={s.degree}>Write Degree Here</p>
        <p className={s.university}>Your University Name Here</p>
        <time className={s.graduateDate}>2015 - 2019</time>
      </div>
    </section>
  );
};

export default Education;
