import { MOCK_EXPERIENCE } from "@/data/staticData";
import s from "./Experiences.module.scss";
import JobExperience from "./JobExperience/JobExperience";

const Experiences = () => {
  return (
    <section className={s.experiences}>
      <h2>Experiences</h2>

      <div className={s.experiencesWrapper}>
        {MOCK_EXPERIENCE.map(
          ({ title, company, startDate, endDate, description, id }) => (
            <JobExperience
              key={id}
              title={title}
              company={company}
              startDate={startDate}
              endDate={endDate}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
