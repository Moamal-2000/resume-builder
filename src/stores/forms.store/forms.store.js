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
      id: 1,
    },
    {
      label: "Profession",
      name: "profession",
      type: "text",
      value: "",
      placeholder: "e.g. Software Engineer",
      required: true,
      id: 2,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      value: "",
      placeholder: "john.doe@example.com",
      required: true,
      id: 3,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      value: "",
      placeholder: "City, Country (e.g. Baghdad, Iraq)",
      required: false,
      id: 4,
    },
  ],

  updateInputValue: ({ name, value, inputGroupKey }) => {
    const inputs = get()[inputGroupKey];

    set({
      [inputGroupKey]: inputs.map((input) => ({
        ...input,
        value: input.name === name ? value : input.value,
      })),
    });
  },
}));

export default useFormsStore;
