import s from "./JobExperience.module.scss";

const JobExperience = ({ title, company, startDate, endDate, description }) => {
  return (
    <div className={s.jobExperience}>
      <div className={s.wrapper}>
        <h3 className={s.title}>
          {title} | {company}
        </h3>
        <time className={s.date}>
          {startDate} - {endDate}
        </time>
      </div>

      <p className={s.description}>{description}</p>
    </div>
  );
};

export default JobExperience;
