"use client";

import { BUILDER_SIDEBAR_PAGES } from "@/data/builderPages";
import useGlobalStore from "@/stores/global.store/global.store";
import FormLink from "./FormLink/FormLink";
import s from "./PagesNav.module.scss";

const PagesNav = () => {
  const isAsideOpen = useGlobalStore((s) => s.isAsideOpen);
  const closeMenuClass = isAsideOpen ? "" : s.closeMenu;

  return (
    <nav className={`${s.pagesNav} ${closeMenuClass}`}>
      <ul>
        {BUILDER_SIDEBAR_PAGES.map((linkData) => (
          <FormLink
            key={linkData.id}
            linkData={linkData}
            shouldHideTitle={!isAsideOpen}
          />
        ))}
      </ul>
    </nav>
  );
};

export default PagesNav;
