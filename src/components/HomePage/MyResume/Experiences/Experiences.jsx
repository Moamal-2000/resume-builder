import { MOCK_EXPERIENCE } from "@/data/staticData";
import s from "./Experiences.module.scss";
import JobExperience from "./JobExperience/JobExperience";

const Experiences = () => {
  return (
    <section className={s.experiences}>
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
    </section>
  );
};

export default Experiences;
