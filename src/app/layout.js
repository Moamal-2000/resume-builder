import "../styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "Resume Builder | Home",
  description:
    "Build a professional resume effortlessly with our intuitive online CV builder. Customize sections, preview in real time, and download your resume in high quality — no registration required.",
};

export default function RootLayout({ children }) {
  return <RootProviders>{children}</RootProviders>;
}
