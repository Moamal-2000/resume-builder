"use client";

import useGlobalStore from "@/stores/global.store/global.store";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isGlobalOverlayActive, updateGlobalState } = useGlobalStore((s) => s);
  const activeClass = isGlobalOverlayActive ? s.active : "";

  function closeOverlay() {
    updateGlobalState({ isGlobalOverlayActive: false });
  }

  return (
    <button
      type="button"
      className={`${s.overlay} ${activeClass}`}
      aria-label="Close overlay"
      onClick={closeOverlay}
    />
  );
};

export default GlobalOverlay;
