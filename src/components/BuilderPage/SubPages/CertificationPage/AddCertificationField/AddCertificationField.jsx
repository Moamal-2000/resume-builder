import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./AddCertificationField.module.scss";

const AddCertificationField = () => {
  return (
    <button type="button" className={s.button}>
      <div className={s.icon}>
        <SvgIcon name="plus" />
      </div>
      <span>Add Certification / License</span>
    </button>
  );
};

export default AddCertificationField;
