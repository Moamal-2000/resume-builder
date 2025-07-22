import { create } from "zustand";
import { getUpdatedInputs, updateEndDateRequiredByStatus } from "./methods";
import {
  certificationInputs,
  contactInfoInputs,
  educationInputs,
  experienceInputs,
  personalInfoInputs,
  skillsInputs,
} from "./states";

export const useFormsStore = create((set, get) => ({
  personalInfoInputs,
  experienceInputs,
  skillsInputs,
  educationInputs,
  contactInfoInputs,
  certificationInputs,

  updateInputValue: ({ name, value, hasValidValue, inputGroupKey }) => {
    const inputs = get()[inputGroupKey];

    let updatedInputs = getUpdatedInputs({
      inputs,
      name,
      value,
      hasValidValue,
    });

    if (name === "currentlyWorking") {
      updatedInputs = updateEndDateRequiredByStatus(updatedInputs);
    }

    set(() => ({ [inputGroupKey]: updatedInputs }));
  },

  checkFormValidity: (inputGroupKey) => {
    const inputs = get()?.[inputGroupKey]?.flat();

    if (!inputs) return false;

    return inputs.every((input) => input.hasValidValue || !input.required);
  },
}));

export default useFormsStore;
