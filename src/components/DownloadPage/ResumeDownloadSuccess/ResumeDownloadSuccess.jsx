import Button from "@/components/Shared/Buttons/Button/Button";
import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ResumeDownloadSuccess.module.scss";

const ResumeDownloadSuccess = () => {
  return (
    <section className={s.downloadSection}>
      <h1>Congratulation!</h1>

      <p>
        Your resume is awesome ready for download. Get it in any format of your
        choice.
      </p>

      <Button paddingInline="90px">
        Download <SvgIcon name="download" />
      </Button>
    </section>
  );
};

export default ResumeDownloadSuccess;
