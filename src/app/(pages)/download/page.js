import LiveResume from "@/components/BuilderPage/LiveResume/LiveResume";
import s from "@/components/DownloadPage/DownloadPage.module.scss";
import ResumeDownloadSuccess from "@/components/DownloadPage/ResumeDownloadSuccess/ResumeDownloadSuccess";
import SvgIcon from "@/components/Shared/SvgIcon";
import Link from "next/link";

export const metadata = {
  title: "Resume Builder | Download",
};

const DownloadPage = () => {
  return (
    <main className={s.downloadPage}>
      <div className="container">
        <Link
          href="/builder"
          className={s.backButton}
          title="Back to edit your resume"
        >
          <SvgIcon name="arrowLeft" />
        </Link>

        <div className={s.wrapper}>
          <ResumeDownloadSuccess />

          <section className={s.resumeSection}>
            <div className={s.buttons}>
              <Link
                href="/preview"
                className={s.previewButton}
                title="Preview your resume"
              >
                Preview
              </Link>
              <Link
                href="/builder"
                className={s.editButton}
                title="Edit your resume"
              >
                Edit
              </Link>
            </div>

            <LiveResume />
          </section>
        </div>
      </div>
    </main>
  );
};

export default DownloadPage;
