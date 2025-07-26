import { EXPERIENCE_MAX_COUNT } from "@/data/constents";
import { create } from "zustand";
import {
  getCurrentlyWorkingStatus,
  getUpdatedInputs,
  setEndDateDisabled,
  setEndDateRequired,
} from "./methods";
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
  experiencesInputs: [experienceInputs],
  techSkillsInputs,
  educationInputs,
  contactInfoInputs,
  certificationInputs,
  experiencesTabIndex: 0,

  getAllInputs: () => {
    const state = get();

    return [
      state.personalInfoInputs,
      state.experiencesInputs,
      state.techSkillsInputs,
      state.contactInfoInputs,
      state.certificationInputs,
      state.educationInputs,
    ].flat(Infinity);
  },

  updateInputValue: ({ name, value, hasValidValue, inputGroupKey }) => {
    const { experiencesTabIndex, experiencesInputs } = get();
    const isExperiencesInputs = inputGroupKey === "experiencesInputs";

    const inputs = isExperiencesInputs
      ? get()[inputGroupKey][experiencesTabIndex]
      : get()[inputGroupKey];

    let updatedInputs = getUpdatedInputs({
      inputs,
      name,
      value,
      hasValidValue,
    });

    if (name === "currentlyWorking") {
      const isCurrentlyWorking = getCurrentlyWorkingStatus(updatedInputs);

      updatedInputs = setEndDateRequired(updatedInputs, !isCurrentlyWorking);
      updatedInputs = setEndDateDisabled(updatedInputs, isCurrentlyWorking);
    }

    if (isExperiencesInputs) {
      const copyInputs = [...experiencesInputs];
      copyInputs[experiencesTabIndex] = updatedInputs;
      set({ experiencesInputs: copyInputs });
      return;
    }

    set(() => ({ [inputGroupKey]: updatedInputs }));
  },

  checkFormValidity: (inputGroupKey) => {
    const inputs = get()?.[inputGroupKey]?.flat();

    if (!inputs) return false;

    return inputs.every((input) => input.hasValidValue || !input.required);
  },

  addField: ({ inputGroupKey, limitation, fieldData }) => {
    const inputs = [...get()?.[inputGroupKey]];
    const numericalId = inputs.length + 1;

    if (numericalId > limitation) {
      alert(`You cannot add more than ${limitation} certifications.`);
      return inputs;
    }

    const copyFieldData = { ...fieldData };
    copyFieldData.id = numericalId;
    copyFieldData.label = `${fieldData.label} ${numericalId}`;
    copyFieldData.name = `${fieldData.name}${numericalId}`;

    inputs.push(copyFieldData);
    set({ [inputGroupKey]: inputs });

    return inputs;
  },

  addExperience: () => {
    const { experiencesInputs } = get();
    const totalJobExperience = experiencesInputs.length + 1;

    if (totalJobExperience > EXPERIENCE_MAX_COUNT) {
      alert(
        `You cannot add more than ${EXPERIENCE_MAX_COUNT} job experiences.`
      );
      return experiencesInputs;
    }

    const updatedExperiencesInputs = [...experiencesInputs, experienceInputs];
    set({
      experiencesInputs: updatedExperiencesInputs,
      experiencesTabIndex: updatedExperiencesInputs.length - 1,
    });

    return experiencesInputs;
  },

  removeExperience: (clickedIndex) => {
    const { experiencesInputs } = get();
    if (experiencesInputs.length <= 1) return experiencesInputs;

    const filteredInputs = experiencesInputs.filter(
      (_, index) => index !== clickedIndex
    );
    set({ experiencesInputs: filteredInputs, experiencesTabIndex: 0 });
  },

  updateTabIndex: (index) => set(() => ({ experiencesTabIndex: index })),
});

// export const useFormsStore = create(persist(formsStore, { name: "forms" }));
export const useFormsStore = create(formsStore);
