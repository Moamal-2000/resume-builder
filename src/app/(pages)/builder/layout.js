import LiveResume from "@/components/BuilderPage/LiveResume/LiveResume";
import Sidebar from "@/components/BuilderPage/Sidebar/Sidebar";
import s from "./Layout.module.scss";

const BuilderLayout = ({ children }) => {
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

export default BuilderLayout;
