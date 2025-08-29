export const BUILDER_SIDEBAR_PAGES = [
  {
    title: "Resumes",
    link: "/builder",
    iconName: "resume",
    unlockAfter: "none",
    id: 0,
  },
  {
    title: "Personal Information",
    link: "/builder/personal-info",
    iconName: "user",
    unlockAfter: "none",
    id: 1,
  },
  {
    title: "Experience",
    link: "/builder/experience",
    iconName: "writingUser",
    unlockAfter: "personalInfoInputs",
    id: 2,
  },
  {
    title: "Technical Skills",
    link: "/builder/tech-skills",
    iconName: "stats",
    unlockAfter: "experiencesInputs",
    id: 3,
  },
  {
    title: "Education",
    link: "/builder/education",
    iconName: "graduationHat",
    unlockAfter: "techSkillsInputs",
    id: 4,
  },
  {
    title: "Contact Information",
    link: "/builder/contact-info",
    iconName: "userInfo",
    unlockAfter: "techSkillsInputs",
    id: 5,
  },
  {
    title: "Certification",
    link: "/builder/certification",
    iconName: "polygonCorrect",
    unlockAfter: "contactInfoInputs",
    id: 6,
  },
];

export const builderInputKeysToPath = {
  resumesInputs: "/builder",
  personalInfoInputs: "/builder/personal-info",
  experiencesInputs: "/builder/experience",
  techSkillsInputs: "/builder/tech-skills",
  educationInputs: "/builder/education",
  contactInfoInputs: "/builder/contact-info",
  certificationInputs: "/builder/certification",
};
