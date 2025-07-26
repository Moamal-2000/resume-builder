import AddFieldButton from "@/components/Shared/Buttons/AddFieldButton/AddFieldButton";
import s from "./AdditionalFormElements.module.scss";

const AdditionalFormElements = ({
  hasAdditionalElements,
  addFieldInfo,
  addField,
  inputGroupKey,
}) => {
  if (!hasAdditionalElements) return null;

  return (
    <div className={s.additionalElements}>
      <AddFieldButton
        label={addFieldInfo?.label}
        onClick={() => {
          if (!addFieldInfo) return;
          const { limitation, fieldData } = addFieldInfo;

          addField({ inputGroupKey, limitation, fieldData });
        }}
      />
    </div>
  );
};

export default AdditionalFormElements;
