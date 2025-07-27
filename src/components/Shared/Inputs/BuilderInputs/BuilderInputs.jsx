"use client";

import Input from "@/components/Shared/Inputs/Input/Input";
import { valueIsDate } from "@/functions/helper";
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

  function handleOnChange(event, index) {
    if (valueIsDate(event.value)) {
      updateInputValue({
        name: event.name,
        value: event.value,
        hasValidValue: true,
        inputGroupKey,
      });
      return;
    }

    const { name, value, checked, type, validity } = event?.target;
    const inputRegex = inputsData[index]?.pattern;
    const regexTest = inputRegex ? RegExp(inputRegex)?.test(value) : true;
    const isRequiredAndEmpty = value === "" && inputsData[index]?.required;

    updateInputValue({
      name,
      value: type === "checkbox" ? checked : value,
      hasValidValue: validity.valid && regexTest && !isRequiredAndEmpty,
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
        onChange={(event) => handleOnChange(event, index)}
        ref={index === 0 ? firstInputRef : null}
      />
    );
  });
};

export default BuilderInputs;
