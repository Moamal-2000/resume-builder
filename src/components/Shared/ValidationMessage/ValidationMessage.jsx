import s from "./ValidationMessage.module.scss";

const ValidationMessage = ({ showMessage, children }) => {
  return (
    <p className={`${s.warningMessage} ${showMessage ? s.show : ""}`}>
      {children}
    </p>
  );
};

export default ValidationMessage;
