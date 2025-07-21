"use client";

import { useEffect } from "react";

const useFocusOnMount = (inputRef) => {
  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);
};

export default useFocusOnMount;
