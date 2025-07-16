"use client";

import { useEffect, useRef } from "react";

const useAnimationStatus = (animateElement) => {
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!animateElement.current) return;

    function handleAnimationStart() {
      isAnimating.current = true;
    }

    function handleAnimationEnd() {
      isAnimating.current = false;
    }

    animateElement.current.addEventListener(
      "animationstart",
      handleAnimationStart
    );
    animateElement.current.addEventListener("animationend", handleAnimationEnd);

    return () => {
      if (!animateElement.current) return;

      animateElement.current.removeEventListener(
        "animationstart",
        handleAnimationStart
      );
      animateElement.current.removeEventListener(
        "animationend",
        handleAnimationEnd
      );
    };
  }, []);

  return isAnimating;
};

export default useAnimationStatus;
