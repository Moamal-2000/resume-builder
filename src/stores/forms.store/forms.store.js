import { CERTIFICATION_MAX_COUNT } from "@/data/constents";
import { create } from "zustand";
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
  experiencesInputs: [experienceInputs],
  techSkillsInputs,
  educationInputs,
  contactInfoInputs,
  certificationInputs,
  experiencesTabIndex: 0,

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
      updatedInputs = updateEndDateRequiredByStatus(updatedInputs);
    }

    if (isExperiencesInputs) {
      experiencesInputs[experiencesTabIndex] = updatedInputs;
      set({ experiencesInputs });
      return;
    }

    set(() => ({ [inputGroupKey]: updatedInputs }));
  },

  checkFormValidity: (inputGroupKey) => {
    const inputs = get()?.[inputGroupKey]?.flat();

    if (!inputs) return false;

    return inputs.every((input) => input.hasValidValue || !input.required);
  },

  addCertificationField: () => {
    const { certificationInputs } = get();
    const numericalId = certificationInputs.length + 1;

    if (numericalId > CERTIFICATION_MAX_COUNT) {
      alert("You cannot add more than 10 certifications.");
      return certificationInputs;
    }

    const newCertificationField = {
      label: `Certification ${numericalId}`,
      name: `certification${numericalId}`,
      type: "text",
      pattern: "^[a-zA-Z0-9\\/&.\\-#' ]{2,100}$",
      value: "",
      placeholder: "Certificate of Engineering",
      required: false,
      hasValidValue: true,
      id: numericalId,
    };

    certificationInputs.push(newCertificationField);
    set({ certificationInputs });

    return certificationInputs;
  },

  addExperience: () => {
    const { experiencesInputs } = get();

    const updatedExperiencesInputs = [...experiencesInputs, experienceInputs];

    set({
      experiencesInputs: updatedExperiencesInputs,
      experiencesTabIndex: updatedExperiencesInputs.length - 1,
    });

    return experiencesInputs;
  },

  updateTabIndex: (index) => set(() => ({ experiencesTabIndex: index })),
});

// export const useFormsStore = create(persist(formsStore, { name: "forms" }));
export const useFormsStore = create(formsStore);
