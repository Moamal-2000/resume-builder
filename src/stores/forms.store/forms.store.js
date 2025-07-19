import { create } from "zustand";
import { experienceInputs, personalInfoInputs } from "./states";

export const useFormsStore = create((set, get) => ({
  personalInfoInputs,
  experienceInputs,

  updateInputValue: ({ name, value, type, isValidValue, inputGroupKey }) => {
    const inputs = get()[inputGroupKey];
    const updatedInputs = getUpdatedInputs({
      inputs,
      name,
      value,
      type,
      isValidValue,
    });

    set(() => ({ [inputGroupKey]: updatedInputs }));
  },
}));

export default useFormsStore;

function getUpdatedInputs({ inputs, name, value, type, isValidValue }) {
  return inputs.map((input) => {
    const hasSubInputs = Array.isArray(input);

    if (hasSubInputs) {
      return input.map((subInput) =>
        updateValue({ input: subInput, name, value, type, isValidValue })
      );
    }

    return updateValue({ input, name, value, type, isValidValue });
  });
}

function updateValue({ input, name, type, value, isValidValue }) {
  if (input.name !== name) return input;

  return { ...input, value, isValidValue };
}
