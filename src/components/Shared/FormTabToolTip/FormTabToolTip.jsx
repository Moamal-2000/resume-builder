import s from "./FormTabToolTip.module.scss";

const FormTabToolTip = ({
  hasFormFilled,
  isFormEmpty,
  id,
  isTooltipVisible,
}) => {
  const formStatus = hasFormFilled
    ? "completely filled"
    : isFormEmpty
    ? "Empty"
    : "partially filled";

  return (
    <p
      className={s.tooltip}
      data-is-tooltip="true"
      id={id}
      role="tooltip"
      aria-hidden={isTooltipVisible ? "false" : "true"}
    >
      The form is {formStatus}
    </p>
  );
};

export default FormTabToolTip;
