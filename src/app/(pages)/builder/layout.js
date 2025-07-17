import Sidebar from "@/components/BuilderPage/Sidebar/Sidebar";
import s from "./Layout.module.scss";

const BuilderLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      <main>
        {children}
        {/* Live Resume Component */}
      </main>
    </div>
  );
};

export default BuilderLayout;
