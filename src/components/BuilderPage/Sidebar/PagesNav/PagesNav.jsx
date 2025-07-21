"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { BUILDER_SIDEBAR_PAGES } from "@/data/builderPages";
import useFormsStore from "@/stores/forms.store/forms.store";
import useGlobalStore from "@/stores/global.store/global.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./PagesNav.module.scss";

const PagesNav = () => {
  const isAsideOpen = useGlobalStore((s) => s.isAsideOpen);
  const formsStore = useFormsStore((s) => s);
  const pathname = usePathname();
  const closeMenuClass = isAsideOpen ? "" : s.closeMenu;

  return (
    <nav className={`${s.pagesNav} ${closeMenuClass}`}>
      <ul>
        {BUILDER_SIDEBAR_PAGES.map(
          ({ title, link, iconName, unlockAfter, id }) => {
            const activeClass = link === pathname ? s.active : "";

            const formInputs = Object?.values(
              formsStore?.[unlockAfter] || formsStore.personalInfoInputs
            );
            const isFormFilled = formInputs
              .flat()
              .every((input) => input.isValidValue);

            let disableClass = !isFormFilled ? s.disabled : "";
            if (unlockAfter === "none") disableClass = "";

            return (
              <li key={id}>
                <Link href={link} className={`${activeClass} ${disableClass}`}>
                  <SvgIcon name={iconName} />
                  <span className={s.title}>{title}</span>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default PagesNav;
