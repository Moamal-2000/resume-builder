import Link from "next/link";
import s from "./Button.module.scss";

const Button = ({
  children,
  fillWidth,
  paddingInline = "20px",
  type = "button",
  onClick,
  href,
}) => {
  if (href)
    return (
      <Link
        href={href}
        type="button"
        className={s.button}
        onClick={onClick}
        style={{
          width: fillWidth ? "100%" : "fit-content",
          paddingInline,
        }}
      >
        {children}
      </Link>
    );

  return (
    <button
      type={type}
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
