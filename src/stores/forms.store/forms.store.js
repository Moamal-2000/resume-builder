import { EXPERIENCE_MAX_COUNT } from "@/data/constants";
import {
  groupInputsByPair,
  markAllRequiredIfOneHasValue,
  setRequiredByValue,
} from "@/functions/helper";
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
    const { experiencesTabIndex, updateExperienceInputs } = get();
    const isExperiencesInputs = inputGroupKey === "experiencesInputs";
    const isEducationInputs = inputGroupKey === "educationInputs";
    const isCertificationInputs = inputGroupKey === "certificationInputs";

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
      updateExperienceInputs(updatedInputs);
      return;
    }

    if (isEducationInputs) {
      updatedInputs = markAllRequiredIfOneHasValue(updatedInputs);
    }

    if (isCertificationInputs) {
      const pairs = groupInputsByPair(updatedInputs);
      updatedInputs = setRequiredByValue(pairs);
    }

    set(() => ({ [inputGroupKey]: updatedInputs }));
  },

  checkFormValidity: (inputGroupKey) => {
    const inputs = get()?.[inputGroupKey]?.flat();

    if (!inputs) return false;

    return inputs.every((input) => input.hasValidValue || !input.required);
  },

  addFields: ({ inputGroupKey, limitation, fields }) => {
    const inputs = [...get()?.[inputGroupKey]];
    const numericalId = inputs.length;

    if (numericalId > limitation) {
      alert(`You cannot add more than ${limitation} fields.`);
      return inputs;
    }

    const deepCopyFields = [...fields].map((field) => ({ ...field }));
    const updatedFields = deepCopyFields.map((field, index) => {
      field.id = numericalId + index + 1;
      field.name = `${field.name}${numericalId + index + 1}`;
      return field;
    });

    set({ [inputGroupKey]: inputs.concat(updatedFields) });
    return inputs;
  },

  addField: ({ inputGroupKey, limitation, fieldData }) => {
    const inputs = [...get()?.[inputGroupKey]];
    const numericalId = inputs.length + 1;

    if (numericalId > limitation) {
      alert(`You cannot add more than ${limitation} fields.`);
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

  updateExperienceInputs: (updatedInputs) => {
    const copyInputs = [...get().experiencesInputs];
    copyInputs[get().experiencesTabIndex] = updatedInputs;

    set({ experiencesInputs: copyInputs });
  },
});

// export const useFormsStore = create(persist(formsStore, { name: "forms" }));
export const useFormsStore = create(formsStore);
