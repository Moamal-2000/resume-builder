import CertificationForm from "./CertificationForm/CertificationForm";
import s from "./CertificationPage.module.scss";

const CertificationPage = () => {
  return (
    <div className={s.certificationPage}>
      <CertificationForm />
    </div>
  );
};

export default CertificationPage;
