import s from "./Education.module.scss";

const Education = () => {
  return (
    <section className={s.education}>
      <h2>Education</h2>

      <div className={s.educationContent}>
        <p className={s.degree}>B.Sc in Computer Science</p>
        <p className={s.university}>National Open University of Nigeria</p>
        <div className={s.graduateDate}>2015 - 2019</div>
      </div>
    </section>
  );
};

export default Education;
