"use client";

import Input from "@/components/Shared/Inputs/Input/Input";
import useFocusOnMount from "@/hooks/helper/useFocusOnMount";
import useFormsStore from "@/stores/forms.store/forms.store";
import { useRef } from "react";
import s from "./BuilderInputs.module.scss";

const BuilderInputs = ({ inputGroupKey }) => {
  const { updateInputValue } = useFormsStore((s) => s);
  const inputsData = useFormsStore((s) => s[inputGroupKey]);
  const firstInputRef = useRef();
  useFocusOnMount(firstInputRef);

  function handleOnChange({ target }) {
    const { name, value, checked, type, validity } = target;

    updateInputValue({
      name,
      value: type === "checkbox" ? checked : value,
      isValidValue: validity.valid,
      inputGroupKey,
    });
  }

  return inputsData.map((item, index) => {
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

    return (
      <Input
        key={item.id}
        {...item}
        onChange={handleOnChange}
        ref={index === 0 ? firstInputRef : null}
      />
    );
  });
};

export default BuilderInputs;
