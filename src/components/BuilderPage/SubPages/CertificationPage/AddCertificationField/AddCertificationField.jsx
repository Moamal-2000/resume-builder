"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./AddCertificationField.module.scss";

const AddCertificationField = () => {
  const addCertificationField = useFormsStore((s) => s.addCertificationField);

  return (
    <button type="button" className={s.button} onClick={addCertificationField}>
      <div className={s.icon}>
        <SvgIcon name="plus" />
      </div>
      <span>Add Certification / License</span>
    </button>
  );
};

export default AddCertificationField;
