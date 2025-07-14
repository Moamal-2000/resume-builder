import s from "./Button.module.scss";

const Button = ({ children, fillWidth, onClick }) => {
  return (
    <button
      type="button"
      className={s.button}
      onClick={onClick}
      style={{ width: fillWidth ? "100%" : "fit-content" }}
    >
      {children}
    </button>
  );
};

export default Button;
