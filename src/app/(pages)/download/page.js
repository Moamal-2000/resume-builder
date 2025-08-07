import s from "@/components/DownloadPage/DownloadPage.module.scss";
import PrintableResume from "@/components/DownloadPage/PrintableResume/PrintableResume";
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

        <PrintableResume />
      </div>
    </main>
  );
};

export default DownloadPage;
