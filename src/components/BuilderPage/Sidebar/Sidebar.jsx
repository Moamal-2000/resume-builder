"use client";

import ProgressBar from "@/components/Shared/ProgressBar/ProgressBar";
import { STOP_BUILDER_PROTECTION } from "@/data/constants";
import { getResumeProgress } from "@/functions/helper";
import useProtectBuilderStep from "@/hooks/app/useProtectBuilderStep";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import useGlobalStore from "@/stores/global.store/global.store";
import { useRef } from "react";
import PagesNav from "./PagesNav/PagesNav";
import s from "./Sidebar.module.scss";
import SidebarIcon from "./SidebarIcon/SidebarIcon";

const Sidebar = () => {
  const isAsideOpen = useGlobalStore((s) => s.isAsideOpen);
  const formsStore = useFormsStore((s) => s);

  const sidebarRef = useRef();
  const closedOnceRef = useRef(false);

  const closeClass = isAsideOpen ? s.open : s.close;
  const closedOnceClass = closedOnceRef.current ? s.closedOnce : "";
  const resumeProgress = getResumeProgress(formsStore);

  useProtectBuilderStep(STOP_BUILDER_PROTECTION);

  return (
    <aside
      className={`${s.sidebar} ${closeClass} ${closedOnceClass}`}
      ref={sidebarRef}
    >
      <div className={s.wrapper}>
        <SidebarIcon
          isAsideOpen={isAsideOpen}
          sidebarRef={sidebarRef}
          closedOnceRef={closedOnceRef}
        />
        <PagesNav />
        <ProgressBar progress={resumeProgress} relatedTo="sidebar" />
      </div>
    </aside>
  );
};

export default Sidebar;
