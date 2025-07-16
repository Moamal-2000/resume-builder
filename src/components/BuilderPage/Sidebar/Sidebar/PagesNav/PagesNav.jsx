"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { BUILDER_SIDEBAR_PAGES } from "@/data/builderPages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import s from "./PagesNav.module.scss";

const PagesNav = () => {
  const pathname = usePathname();
  const { isAsideOpen } = useSelector((s) => s.global);
  const closeMenuClass = isAsideOpen ? "" : s.closeMenu;

  return (
    <nav className={`${s.pagesNav} ${closeMenuClass}`}>
      <ul>
        {BUILDER_SIDEBAR_PAGES.map(({ title, link, iconName, id }) => {
          const activeClass = link === pathname ? s.active : "";

          return (
            <li key={id}>
              <Link href={link} className={activeClass}>
                <SvgIcon name={iconName} />
                <span className={s.title}>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PagesNav;
