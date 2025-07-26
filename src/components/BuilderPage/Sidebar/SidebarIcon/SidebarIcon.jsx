"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import useAnimationStatus from "@/hooks/helper/useAnimationStatus";
import useGlobalStore from "@/stores/global.store/global.store";
import { useEffect, useRef, useState } from "react";
import s from "./SidebarIcon.module.scss";

const SidebarIcon = ({ isAsideOpen, sidebarRef, closedOnceRef }) => {
  const sidebarIcon = isAsideOpen ? "menu" : "burgerMenu";
  const [sidebarIconName, setSidebarIconName] = useState(sidebarIcon);
  const toggleAside = useGlobalStore((s) => s.toggleAside);

  const debounceTimeout = useRef(null);
  const closeClass = isAsideOpen ? "" : s.close;

  const isSidebarAnimating = useAnimationStatus(sidebarRef);

  function handleToggleAside() {
    if (!closedOnceRef.current) closedOnceRef.current = true;
    if (isSidebarAnimating.current) return;

    toggleAside();
  }

  useEffect(() => {
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setSidebarIconName(sidebarIcon);
    }, 900);
  }, [isAsideOpen]);

  return (
    <button
      type="button"
      onClick={handleToggleAside}
      className={`${s.button} ${closeClass}`}
      title={`${isAsideOpen ? "Close" : "Open"} sidebar`}
    >
      <SvgIcon name={sidebarIconName} />
    </button>
  );
};

export default SidebarIcon;
