import { create } from "zustand";

export const useFormsStore = create((set, get) => ({
  personalInfoInputs: [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      value: "",
      pattern: "^[a-zA-Z ]+$",
      placeholder: "John Doe",
      required: true,
      isValidValue: false,
      id: 1,
    },
    {
      label: "Profession",
      name: "profession",
      type: "text",
      value: "",
      placeholder: "e.g. Software Engineer",
      required: true,
      isValidValue: false,
      id: 2,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      value: "",
      placeholder: "john.doe@example.com",
      required: true,
      isValidValue: false,
      id: 3,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      value: "",
      placeholder: "City, Country (e.g. Baghdad, Iraq)",
      required: false,
      isValidValue: true,
      id: 4,
    },
  ],
  experienceInputs: [
    {
      label: "Job Title / Role",
      name: "role",
      type: "text",
      value: "",
      placeholder: "e.g. Front-End Developer",
      required: true,
      isValidValue: false,
      id: 1,
    },
    {
      label: "Company Name",
      name: "company",
      type: "text",
      value: "",
      placeholder: "e.g. Google",
      required: true,
      isValidValue: false,
      id: 2,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      value: "",
      placeholder: "City, Country (e.g. Baghdad, Iraq)",
      required: true,
      isValidValue: false,
      id: 3,
    },
    [
      {
        label: "Start Date",
        name: "startDate",
        type: "text",
        value: "",
        placeholder: "MM / YYYY",
        required: true,
        isValidValue: false,
        id: 4,
      },
      {
        label: "End Date",
        name: "endDate",
        type: "text",
        value: "",
        placeholder: "MM / YYYY",
        required: false, // Not required if "Currently working here" is checked
        isValidValue: true,
        id: 5,
      },
    ],
    {
      label: "Currently work here",
      name: "currentlyWorking",
      type: "checkbox",
      value: false,
      required: false,
      isValidValue: true,
      id: 6,
    },
    {
      label: "Job Description",
      name: "description",
      type: "textarea",
      value: "",
      placeholder:
        "Describe your responsibilities, achievements, and skills...",
      required: true,
      isValidValue: false,
      id: 7,
    },
  ],

  updateInputValue: ({ name, value, isValidValue, inputGroupKey }) => {
    const inputs = get()[inputGroupKey];

    set({
      [inputGroupKey]: inputs.map((input) => ({
        ...input,
        value: input.name === name ? value : input.value,
        isValidValue: input.name === name ? isValidValue : input.isValidValue,
      })),
    });
  },
}));

export default useFormsStore;
