import Sidebar from "@/components/BuilderPage/Sidebar/Sidebar/Sidebar";
import s from "./Layout.module.scss";

const BuilderLayout = ({ children }) => {
  return (
    <div className={s.builderLayout}>
      <Sidebar />
      {children}
      <h2>Live Resume Component</h2>
    </div>
  );
};

export default BuilderLayout;
