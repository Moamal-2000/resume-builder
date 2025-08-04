"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./RemoveButton.module.scss";

const RemoveButton = ({ inputGroupKey, fieldId }) => {
  const removeField = useFormsStore((s) => s.removeField);

  function handleClick() {
    const isCertificationField = inputGroupKey === "certificationInputs";

    removeField({ inputGroupKey, fieldId });
    if (!isCertificationField) return;

    removeField({ inputGroupKey, fieldId: fieldId + 1 });
  }

  return (
    <button
      type="button"
      className={s.removeButton}
      title="Remove"
      onClick={handleClick}
    >
      <SvgIcon name="xMark2" />
    </button>
  );
};

export default RemoveButton;
