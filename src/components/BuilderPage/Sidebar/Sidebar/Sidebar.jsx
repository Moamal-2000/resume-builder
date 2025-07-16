"use client";

import ProgressBar from "@/components/Shared/ProgressBar/ProgressBar";
import SvgIcon from "@/components/Shared/SvgIcon";
import { updateGlobalState } from "@/redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import PagesNav from "./PagesNav/PagesNav";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector((s) => s.global);

  const openClass = isAsideOpen ? s.open : "";
  const resumeProgress = "10%";

  function handleToggleAside() {
    dispatch(updateGlobalState({ key: "isAsideOpen", value: !isAsideOpen }));
  }

  return (
    <aside className={`${s.sidebar} ${openClass}`}>
      <button type="button" onClick={handleToggleAside}>
        <SvgIcon name="menu" />
      </button>

      <PagesNav />
      <ProgressBar progress={resumeProgress} />
    </aside>
  );
};

export default Sidebar;
