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
}));

export default useFormsStore;
