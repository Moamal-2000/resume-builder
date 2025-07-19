import s from "./Textarea.module.scss";

const Textarea = ({ label, name, value, onChange, required, placeholder }) => {
  return (
    <div className={s.textarea}>
      {label && (
        <label htmlFor={name} data-required={required}>
          {label}
        </label>
      )}

      <textarea
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
