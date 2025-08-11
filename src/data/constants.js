export const CERTIFICATION_MAX_COUNT = 8;
export const EXPERIENCE_MAX_COUNT = 4;
export const SKILLS_MAX_COUNT = 14;
export const SIDEBAR_ICON_DEBOUNCE_DELAY = 900;
export const DESCRIPTION_PLACEHOLDER = `E.g. "Developed and maintained client-facing web applications using modern JavaScript frameworks. Collaborated with designers and back-end teams to deliver features on time."`;

export const RESUME_OPTIONS = {
  filename: "resume.pdf",
  image: { type: "webp", quality: 1 },
  html2canvas: { scale: 3 },
  jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  pagebreak: { mode: ["avoid-all", "css", "legacy"] },
};

// Debugging
export const STOP_BUILDER_PROTECTION = true;
