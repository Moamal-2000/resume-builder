"use client";

import ProgressBar from "@/components/Shared/ProgressBar/ProgressBar";
import { useRef } from "react";
import { useSelector } from "react-redux";
import PagesNav from "./PagesNav/PagesNav";
import s from "./Sidebar.module.scss";
import SidebarIcon from "./SidebarIcon/SidebarIcon";

const Sidebar = () => {
  const { isAsideOpen } = useSelector((s) => s.global);

  const sidebarRef = useRef();
  const closedOnceRef = useRef(false);

  const closeClass = isAsideOpen ? s.open : s.close;
  const closedOnceClass = closedOnceRef.current ? s.closedOnce : "";
  const resumeProgress = "10%";

  return (
    <aside
      className={`${s.sidebar} ${closeClass} ${closedOnceClass}`}
      ref={sidebarRef}
    >
      <SidebarIcon
        isAsideOpen={isAsideOpen}
        sidebarRef={sidebarRef}
        closedOnceRef={closedOnceRef}
      />
      <PagesNav />
      <ProgressBar progress={resumeProgress} relatedTo="sidebar" />
    </aside>
  );
};

export default Sidebar;
