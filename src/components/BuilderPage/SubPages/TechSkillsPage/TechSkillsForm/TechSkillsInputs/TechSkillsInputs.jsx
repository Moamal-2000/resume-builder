"use client";

import Input from "@/components/Shared/Inputs/Input/Input";
import useFormsStore from "@/stores/forms.store/forms.store";

const TechSkillsInputs = () => {
  const { skillsInputs, updateInputValue } = useFormsStore((s) => s);

  function handleOnChange({ target }) {
    const { name, value, type, validity } = target;

    updateInputValue({
      name,
      type,
      value,
      isValidValue: validity.valid,
      inputGroupKey: "skillsInputs",
    });
  }

  return skillsInputs.map((item) => {
    return <Input key={item.id} {...item} onChange={handleOnChange} />;
  });
};

export default TechSkillsInputs;
