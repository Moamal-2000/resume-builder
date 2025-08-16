import s from "./FormTabToolTip.module.scss";

const FormTabToolTip = ({ hasFormFilled, isFormEmpty, id }) => {
  const formStatus = hasFormFilled
    ? "completely filled"
    : isFormEmpty
    ? "Empty"
    : "partially filled";

  return (
    <p className={s.tooltip} data-is-tooltip="true" id={id}>
      The form is {formStatus}
    </p>
  );
};

export default FormTabToolTip;
