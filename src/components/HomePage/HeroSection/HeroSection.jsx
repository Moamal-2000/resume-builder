import Button from "@/components/Shared/Buttons/Button/Button";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <h1>
        Create
        <br />a career in tech.
      </h1>

      <p>
        The template includes carefully structured sections for personal
        information, summary or objective, work experience, education, skills,
        projects, certifications, and more. You can easily customize these
        sections to fit your unique background.
      </p>

      <Button>Create Resume for free</Button>
    </section>
  );
};

export default HeroSection;
