"use client";

import ProgressBar from "@/components/Shared/ProgressBar/ProgressBar";
import SvgIcon from "@/components/Shared/SvgIcon";
import PagesNav from "./PagesNav/PagesNav";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const resumeProgress = "10%";

  return (
    <aside className={s.sidebar}>
      <button type="button">
        <SvgIcon name="menu" />
      </button>

      <PagesNav />
      <ProgressBar progress={resumeProgress} />
    </aside>
  );
};

export default Sidebar;
