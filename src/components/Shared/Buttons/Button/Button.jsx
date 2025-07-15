import s from "./Button.module.scss";

const Button = ({ children, fillWidth, paddingInline = "20px", onClick }) => {
  return (
    <button
      type="button"
      className={s.button}
      onClick={onClick}
      style={{
        width: fillWidth ? "100%" : "fit-content",
        paddingInline,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
