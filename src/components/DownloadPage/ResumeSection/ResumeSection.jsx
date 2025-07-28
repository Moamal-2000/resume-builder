import LiveResume from "@/components/BuilderPage/LiveResume/LiveResume";
import Link from "next/link";
import s from "./ResumeSection.module.scss";

const ResumeSection = () => {
  return (
    <section className={s.resumeSection}>
      <div className={s.buttons}>
        <Link
          href="/preview"
          className={s.previewButton}
          title="Preview your resume"
        >
          Preview
        </Link>
        <Link href="/builder" className={s.editButton} title="Edit your resume">
          Edit
        </Link>
      </div>

      <LiveResume />
    </section>
  );
};

export default ResumeSection;
