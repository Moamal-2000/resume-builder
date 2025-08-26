import LiveResume from "../Resumes/LiveResume/LiveResume";
import Sidebar from "../Sidebar/Sidebar";
import s from "./BuilderRootLayout.module.scss";

const BuilderRootLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main className={s.main}>
        {children}
        <LiveResume />
      </main>
    </div>
  );
};

export default BuilderRootLayout;
