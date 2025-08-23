import s from "./SectionTitle.module.scss";

const SectionTitle = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

export default SectionTitle;
