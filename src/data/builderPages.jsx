export const BUILDER_PAGES = {
  experience: () => <main>Experience UI</main>,
  techSkills: () => <main>TechSkills UI</main>,
  education: () => <main>Education UI</main>,
  contactInfo: () => <main>ContactInfo UI</main>,
  certifications: () => <main>Certifications UI</main>,
};

export const BUILDER_SIDEBAR_PAGES = [
  {
    title: "Personal Information",
    link: "/builder",
    iconName: "user",
    id: 1,
  },
  {
    title: "Experience",
    link: "/builder/experience",
    iconName: "writingUser",
    id: 2,
  },
  {
    title: "Technical Skills",
    link: "/builder/techSkills",
    iconName: "stats",
    id: 3,
  },
  {
    title: "Education",
    link: "/builder/education",
    iconName: "graduationHat",
    id: 4,
  },
  {
    title: "Contact Information",
    link: "/builder/contactInfo",
    iconName: "userInfo",
    id: 5,
  },
  {
    title: "Certification",
    link: "/builder/certification",
    iconName: "polygonCorrect",
    id: 6,
  },
];
