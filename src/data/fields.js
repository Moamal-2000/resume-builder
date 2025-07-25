export const newCertificationField = {
  label: `Certification`,
  name: `certification`,
  type: "text",
  pattern: "^[a-zA-Z0-9\\/&.\\-#' ]{2,100}$",
  value: "",
  placeholder: "Certificate of Engineering",
  required: false,
  hasValidValue: true,
  id: null,
};

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
