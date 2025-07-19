import { create } from "zustand";
import { getUpdatedInputs } from "./methods";
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
