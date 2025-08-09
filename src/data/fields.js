export const newCertificationFields = [
  {
    label: "Certification Name",
    name: "certification",
    type: "text",
    value: "",
    pattern: "^[a-zA-Z0-9\\/&.\\-#' ]{2,100}$",
    placeholder: "Certificate of Engineering",
    required: false,
    hasValidValue: true,
    hasRemoveIcon: true,
    warningMessage:
      "Please enter a valid certification name (2-100 chars, letters, numbers, & . - # allowed).",
    id: null,
  },
  {
    label: "Certificate URL",
    name: "certificationUrl",
    type: "url",
    value: "",
    placeholder: "https://example.com/certificate",
    required: false,
    hasValidValue: true,
    hasRemoveIcon: false,
    warningMessage: "Please enter a valid certificate URL.",
    id: null,
  },
];

export const newSkillField = {
  label: "Skill",
  name: "skill",
  type: "text",
  value: "",
  pattern: "^[a-zA-Z0-9.+\\-]{2,30}$",
  placeholder: "JavaScript",
  required: true,
  hasValidValue: false,
  hasRemoveIcon: true,
  warningMessage:
    "Please enter a valid skill (2-30 chars, letters, numbers, . + -).",
  id: null,
};
