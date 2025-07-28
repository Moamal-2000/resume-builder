import s from "@/components/DownloadPage/DownloadPage.module.scss";
import ResumeDownloadSuccess from "@/components/DownloadPage/ResumeDownloadSuccess/ResumeDownloadSuccess";
import ResumeSection from "@/components/DownloadPage/ResumeSection/ResumeSection";
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
          <ResumeSection />
        </div>
      </div>
    </main>
  );
};

export default DownloadPage;
