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
  id: null,
};
