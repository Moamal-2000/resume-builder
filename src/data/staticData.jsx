import LiveResume2 from "@/components/BuilderPage/Resumes/LiveResume2/LiveResume2";
import LiveResume3 from "@/components/BuilderPage/Resumes/LiveResume3/LiveResume3";
import ResumeSection from "@/components/DownloadPage/PrintableResume/ResumeSection/ResumeSection";

export const MY_SOCIAL_MEDIA = [
  {
    socialName: "Gmail",
    title: "moamalalaapro1@gmail.com",
    link: "mailto:moamalalaapro1@gmail.com",
    iconName: "email",
    id: 1,
  },
  {
    socialName: "Linkedin",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/moamal-alaa",
    iconName: "linkedin",
    id: 2,
  },
  {
    socialName: "Phone Number",
    title: "+964 7772181425",
    link: "tel:+9647772181425",
    iconName: "phone",
    id: 3,
  },
  {
    socialName: "GitHub",
    title: "GitHub",
    link: "https://github.com/Moamal-2000",
    iconName: "github",
    id: 4,
  },
  {
    socialName: "Portfolio",
    title: "Portfolio",
    link: "https://moamalalaa.netlify.app",
    iconName: "myPortfolioLogo",
    id: 5,
  },
];

export const MY_TECH_SKILLS = [
  "JavaScript",
  "SASS",
  "HTML5",
  "React.js",
  "Next.js",
  "Redux/Toolkit",
  "Zustand",
  "I18Next",
  "FramerMotion",
  "PWA",
];

export const MOCK_EXPERIENCE = [
  {
    title: "Front-End Developer",
    company: "Company Name",
    startDate: "February 2025",
    endDate: "Present",
    description:
      "Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    id: 1,
  },
  {
    title: "Front-End Developer",
    company: "Company Name",
    startDate: "December 2024",
    endDate: "February 2025",
    description:
      "Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    id: 2,
  },
  {
    title: "Front-End Developer",
    company: "Company Name",
    startDate: "September 2022",
    endDate: "December 2024",
    description:
      "Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    id: 3,
  },
  {
    title: "Front-End Developer",
    company: "Company Name",
    startDate: "November 2020",
    endDate: "September 2022",
    description:
      "Explain briefly what you do at the company here in not more than 40 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    id: 4,
  },
];

export const RESUMES = [
  {
    name: "resume 1",
    imagePath: "/assets/images/resume1.png",
    component: <ResumeSection />,
    id: 1,
  },
  {
    name: "resume 2",
    imagePath: "/assets/images/resume2.png",
    component: <LiveResume2 />,
    id: 2,
  },
  {
    name: "resume 3",
    imagePath: "",
    component: <LiveResume3 />,
    id: 3,
  },
];
