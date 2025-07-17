"use client";

import ProgressBar from "@/components/Shared/ProgressBar/ProgressBar";
import SvgIcon from "@/components/Shared/SvgIcon";
import useAnimationStatus from "@/hooks/helper/useAnimationStatus";
import { updateGlobalState } from "@/redux/slices/globalSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PagesNav from "./PagesNav/PagesNav";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector((s) => s.global);

  const sidebarIcon = isAsideOpen ? "menu" : "burgerMenu";
  const [sidebarIconName, setSidebarIconName] = useState(sidebarIcon);

  const sidebarRef = useRef();
  const closedOnce = useRef(false);
  const debounceTimeout = useRef(null);
  const isSidebarAnimating = useAnimationStatus(sidebarRef);

  const closeClass = isAsideOpen ? s.open : s.close;
  const closedOnceClass = closedOnce.current ? s.closedOnce : "";
  const resumeProgress = "10%";

  function handleToggleAside() {
    if (!closedOnce.current) closedOnce.current = true;
    if (isSidebarAnimating.current) return;

    dispatch(updateGlobalState({ key: "isAsideOpen", value: !isAsideOpen }));
  }

  useEffect(() => {
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setSidebarIconName(sidebarIcon);
    }, 900);
  }, [isAsideOpen]);

  return (
    <aside
      className={`${s.sidebar} ${closeClass} ${closedOnceClass}`}
      ref={sidebarRef}
    >
      <button type="button" onClick={handleToggleAside} className={closeClass}>
        <SvgIcon name={sidebarIconName} />
      </button>

      <PagesNav />
      <ProgressBar progress={resumeProgress} relatedTo="sidebar" />
    </aside>
  );
};

export default Sidebar;
