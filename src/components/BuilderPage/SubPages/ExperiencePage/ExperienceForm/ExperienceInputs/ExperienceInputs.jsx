"use client";

import Input from "@/components/Shared/Inputs/Input/Input";
import useFormsStore from "@/stores/forms.store/forms.store";
import s from "./ExperienceInputs.module.scss";

const ExperienceInputs = () => {
  const { experienceInputs, updateInputValue } = useFormsStore((s) => s);

  function handleOnChange({ target }) {
    const { name, value, checked, type, validity } = target;

    updateInputValue({
      name,
      type,
      value: type === "checkbox" ? checked : value,
      isValidValue: validity.valid,
      inputGroupKey: "experienceInputs",
    });
  }

  return experienceInputs.map((item, index) => {
    const isArray = Array.isArray(item);

    if (isArray) {
      return (
        <div className={s.wrapper} key={`inputs-wrapper-${index}`}>
          {item.map((subItem) => {
            return (
              <Input
                key={subItem.id}
                {...subItem}
                onChange={handleOnChange}
                fillWidth={true}
              />
            );
          })}
        </div>
      );
    }

    return <Input key={item.id} {...item} onChange={handleOnChange} />;
  });
};

export default ExperienceInputs;
