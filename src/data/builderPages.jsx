export const BUILDER_SIDEBAR_PAGES = [
  {
    title: "Personal Information",
    link: "/builder",
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
    link: "/builder/techSkills",
    iconName: "stats",
    unlockAfter: "experienceInputs",
    id: 3,
  },
  {
    title: "Education",
    link: "/builder/education",
    iconName: "graduationHat",
    unlockAfter: "skillsInputs",
    id: 4,
  },
  {
    title: "Contact Information",
    link: "/builder/contactInfo",
    iconName: "userInfo",
    unlockAfter: "educationInputs",
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
