import LiveResume3 from "../LiveResume3/LiveResume3";
import Sidebar from "../Sidebar/Sidebar";
import s from "./BuilderRootLayout.module.scss";

const BuilderRootLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main className={s.main}>
        {children}
        <LiveResume3 />
      </main>
    </div>
  );
};

export default BuilderRootLayout;
