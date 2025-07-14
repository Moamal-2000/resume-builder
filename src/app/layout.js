import Header from "@/components/Header/Header";
import "../styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "Builder Resume | Home",
  description:
    "Build a professional resume effortlessly with our intuitive online CV builder. Customize sections, preview in real time, and download your resume in high quality — no registration required.",
};

export default function RootLayout({ children }) {
  return (
    <RootProviders>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </RootProviders>
  );
}
