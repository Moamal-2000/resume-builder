"use client";

import Input from "@/components/Shared/Inputs/Input/Input";
import useFocusOnMount from "@/hooks/helper/useFocusOnMount";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import { useRef } from "react";
import s from "./BuilderInputs.module.scss";

const BuilderInputs = ({ inputGroupKey, hasTabs = false }) => {
  const updateInputValue = useFormsStore((s) => s.updateInputValue);
  const activeTabIndex = useFormsStore(
    (s) => s[inputGroupKey.replace("Inputs", "TabIndex")]
  );
  const inputsData = useFormsStore((s) =>
    hasTabs ? s[inputGroupKey][activeTabIndex] : s[inputGroupKey]
  );

  const firstInputRef = useRef();
  useFocusOnMount(firstInputRef);

  function handleOnChange(target, index) {
    const { name, value, checked, type, validity } = target;
    const inputRegex = inputsData[index]?.pattern;
    const regexTest = inputRegex ? RegExp(inputRegex)?.test(value) : true;

    updateInputValue({
      name,
      value: type === "checkbox" ? checked : value,
      hasValidValue: validity.valid && regexTest,
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
              onChange={({ target }) => handleOnChange(target, index)}
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
        onChange={({ target }) => handleOnChange(target, index)}
        ref={index === 0 ? firstInputRef : null}
      />
    );
  });
};

export default BuilderInputs;
