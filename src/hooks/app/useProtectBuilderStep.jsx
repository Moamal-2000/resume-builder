"use client";

import {
  BUILDER_SIDEBAR_PAGES,
  builderInputKeysToPath,
} from "@/data/builderSidebarLinks";
import useFormsStore from "@/stores/forms.store/forms.store";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const useProtectBuilderStep = () => {
  const pathname = usePathname();
  const checkFormValidity = useFormsStore((s) => s.checkFormValidity);
  const router = useRouter();

  useLayoutEffect(() => {
    const unlockAfterKey = BUILDER_SIDEBAR_PAGES.find(
      (page) => page.link === pathname
    ).unlockAfter;

    if (unlockAfterKey === "none") return;

    const previousFormValid = checkFormValidity(unlockAfterKey);
    const previousFormPath = builderInputKeysToPath[unlockAfterKey];

    if (!previousFormValid) router.push(previousFormPath);
  }, [pathname]);
};

export default useProtectBuilderStep;
