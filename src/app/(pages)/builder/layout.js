"use client";

import LiveResume from "@/components/BuilderPage/LiveResume/LiveResume";
import Sidebar from "@/components/BuilderPage/Sidebar/Sidebar";
import useProtectBuilderStep from "@/hooks/app/useProtectBuilderStep";
import s from "./Layout.module.scss";

const BuilderLayout = ({ children }) => {
  // useProtectBuilderStep();

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
