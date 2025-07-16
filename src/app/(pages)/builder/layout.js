import Sidebar from "@/components/BuilderPage/Sidebar/Sidebar/Sidebar";
import s from "./Layout.module.scss";

const BuilderLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      {children}
      {/* Live Resume Component */}
    </div>
  );
};

export default BuilderLayout;
