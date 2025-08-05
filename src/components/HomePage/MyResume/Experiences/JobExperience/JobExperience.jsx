import s from "./JobExperience.module.scss";

const JobExperience = ({ title, company, startDate, endDate, description }) => {
  return (
    <div className={s.jobExperience}>
      <h3 className={s.title}>
        {title} | {company}
      </h3>
      <time className={s.date}>
        {startDate} - {endDate}
      </time>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default JobExperience;
