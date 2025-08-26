import Sidebar from "../Sidebar/Sidebar";
import s from "./BuilderRootLayout.module.scss";
import ResumeWrapper from "./ResumeWrapper/ResumeWrapper";

const BuilderRootLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main className={s.main}>
        {children}
        <ResumeWrapper />
      </main>
    </div>
  );
};

export default BuilderRootLayout;
