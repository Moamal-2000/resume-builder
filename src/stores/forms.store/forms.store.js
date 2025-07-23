import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUpdatedInputs, updateEndDateRequiredByStatus } from "./methods";
import {
  certificationInputs,
  contactInfoInputs,
  educationInputs,
  experienceInputs,
  personalInfoInputs,
  techSkillsInputs,
} from "./states";

const formsStore = (set, get) => ({
  personalInfoInputs,
  experienceInputs,
  techSkillsInputs,
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
});

export const useFormsStore = create(persist(formsStore, { name: "forms" }));

export default useFormsStore;
