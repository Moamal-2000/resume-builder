"use client";

import Input from "@/components/Shared/Inputs/Input/Input";
import useFormsStore from "@/stores/forms.store/forms.store";
import s from "./EducationsInputs.module.scss";

const EducationsInputs = () => {
  const { educationInputs, updateInputValue } = useFormsStore((s) => s);

  function handleOnChange({ target }) {
    const { name, value, type, validity } = target;

    updateInputValue({
      name,
      type,
      value,
      isValidValue: validity.valid,
      inputGroupKey: "educationInputs",
    });
  }

  return educationInputs.map((item, index) => {
    const isArray = Array.isArray(item);

    if (isArray) {
      return (
        <div className={s.wrapper} key={`inputs-wrapper-${index}`}>
          {item.map((subItem) => (
            <Input
              key={subItem.id}
              {...subItem}
              onChange={handleOnChange}
              fillWidth={true}
            />
          ))}
        </div>
      );
    }

    return <Input key={item.id} {...item} onChange={handleOnChange} />;
  });
};

export default EducationsInputs;
