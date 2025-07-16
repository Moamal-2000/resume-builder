"use client";

import ProgressBar from "@/components/Shared/ProgressBar/ProgressBar";
import SvgIcon from "@/components/Shared/SvgIcon";
import { updateGlobalState } from "@/redux/slices/globalSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PagesNav from "./PagesNav/PagesNav";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector((s) => s.global);

  const isSidebarAnimating = useRef(false);
  const closedOnce = useRef(false);
  const sidebarRef = useRef();

  const closeClass = isAsideOpen ? s.open : s.close;
  const closedOnceClass = closedOnce.current ? s.closedOnce : "";
  const resumeProgress = "10%";

  function handleToggleAside() {
    if (!closedOnce.current) closedOnce.current = true;
    if (isSidebarAnimating.current) return;

    dispatch(updateGlobalState({ key: "isAsideOpen", value: !isAsideOpen }));
  }

  useEffect(() => {
    if (!sidebarRef.current) return;

    function handleAnimationStart() {
      isSidebarAnimating.current = true;
    }

    function handleAnimationEnd() {
      isSidebarAnimating.current = false;
    }

    sidebarRef.current.addEventListener("animationstart", handleAnimationStart);
    sidebarRef.current.addEventListener("animationend", handleAnimationEnd);

    return () => {
      sidebarRef.current.removeEventListener(
        "animationstart",
        handleAnimationStart
      );
      sidebarRef.current.removeEventListener(
        "animationend",
        handleAnimationEnd
      );
    };
  }, []);

  return (
    <aside
      className={`${s.sidebar} ${closeClass} ${closedOnceClass}`}
      ref={sidebarRef}
    >
      <button type="button" onClick={handleToggleAside}>
        <SvgIcon name="menu" />
      </button>

      <PagesNav />
      <ProgressBar progress={resumeProgress} relatedTo="sidebar" />
    </aside>
  );
};

export default Sidebar;
