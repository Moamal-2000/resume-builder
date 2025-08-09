"use client";

import {
  BUILDER_SIDEBAR_PAGES,
  builderInputKeysToPath,
} from "@/data/builderSidebarLinks";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const useProtectBuilderStep = (stopProtection) => {
  const checkFormValidity = useFormsStore((s) => s.checkFormValidity);
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    if (stopProtection) return;

    const unlockAfterKey = BUILDER_SIDEBAR_PAGES.find(
      (page) => page.link === pathname
    ).unlockAfter;

    if (unlockAfterKey === "none") return;

    const isPreviousFormValid = checkFormValidity(unlockAfterKey);
    const previousFormPath = builderInputKeysToPath[unlockAfterKey];

    if (!isPreviousFormValid) router.push(previousFormPath);
  }, [pathname]);
};

export default useProtectBuilderStep;
