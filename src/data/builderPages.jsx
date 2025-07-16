import CertificationPage from "@/components/BuilderPage/SubPages/CertificationPage/CertificationPage";
import ContactInfoPage from "@/components/BuilderPage/SubPages/ContactInfoPage/ContactInfoPage";
import EducationPage from "@/components/BuilderPage/SubPages/EducationPage/EducationPage";
import ExperiencePage from "@/components/BuilderPage/SubPages/ExperiencePage/ExperiencePage";
import TechSkillsPage from "@/components/BuilderPage/SubPages/TechSkillsPage/TechSkillsPage";

export const BUILDER_PAGES = {
  experience: () => <ExperiencePage />,
  techSkills: () => <TechSkillsPage />,
  education: () => <EducationPage />,
  contactInfo: () => <ContactInfoPage />,
  certification: () => <CertificationPage />,
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
