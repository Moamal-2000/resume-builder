import LiveResume2 from "../LiveResume2/LiveResume2";
import Sidebar from "../Sidebar/Sidebar";
import s from "./BuilderRootLayout.module.scss";

const BuilderRootLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main className={s.main}>
        {children}
        <LiveResume2 />
      </main>
    </div>
  );
};

export default BuilderRootLayout;
