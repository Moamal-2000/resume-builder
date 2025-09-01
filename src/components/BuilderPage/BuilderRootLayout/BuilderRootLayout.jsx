import Sidebar from "../Sidebar/Sidebar";
import s from "./BuilderRootLayout.module.scss";
import ResumePreview from "./ResumePreview/ResumePreview";
import SelectedResume from "./SelectedResume/SelectedResume";

const BuilderRootLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main className={s.main}>
        {children}
        <SelectedResume />
      </main>
      <ResumePreview />
    </div>
  );
};

export default BuilderRootLayout;
