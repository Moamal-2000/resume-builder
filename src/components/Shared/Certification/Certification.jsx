import s from "./Certification.module.scss";

const Certification = ({ data: [name, url] }) => {
  if (name === "") return null;

  return (
    <li className={s.certificate}>
      <a href={url} target="_blank" rel="noreferrer noopenner">
        {name}
      </a>
    </li>
  );
};

export default Certification;
