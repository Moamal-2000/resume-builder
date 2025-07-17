"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import useAnimationStatus from "@/hooks/helper/useAnimationStatus";
import { updateGlobalState } from "@/redux/slices/globalSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./SidebarIcon.module.scss";

const SidebarIcon = ({ isAsideOpen, sidebarRef, closedOnceRef }) => {
  const sidebarIcon = isAsideOpen ? "menu" : "burgerMenu";
  const [sidebarIconName, setSidebarIconName] = useState(sidebarIcon);

  const dispatch = useDispatch();
  const debounceTimeout = useRef(null);
  const closeClass = isAsideOpen ? "" : s.close;

  const isSidebarAnimating = useAnimationStatus(sidebarRef);

  function handleToggleAside() {
    if (!closedOnceRef.current) closedOnceRef.current = true;
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
    <button
      type="button"
      onClick={handleToggleAside}
      className={`${s.button} ${closeClass}`}
    >
      <SvgIcon name={sidebarIconName} />
    </button>
  );
};

export default SidebarIcon;
