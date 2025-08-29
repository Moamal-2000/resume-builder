import Sidebar from "../Sidebar/Sidebar";
import s from "./BuilderRootLayout.module.scss";
import ResumePreview from "./ResumePreview/ResumePreview";
import ResumeWrapper from "./ResumeWrapper/ResumeWrapper";

const BuilderRootLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main className={s.main}>
        {children}
        <ResumeWrapper />
      </main>
      <ResumePreview />
    </div>
  );
};

export default BuilderRootLayout;
