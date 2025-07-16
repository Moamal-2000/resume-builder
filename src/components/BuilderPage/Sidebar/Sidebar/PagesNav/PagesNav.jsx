"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { BUILDER_SIDEBAR_PAGES } from "@/data/builderPages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./PagesNav.module.scss";

const PagesNav = () => {
  const pathname = usePathname();

  return (
    <nav className={s.pagesNav}>
      <ul>
        {BUILDER_SIDEBAR_PAGES.map(({ title, link, iconName, id }) => {
          const activeClass = link === pathname ? s.active : "";

          return (
            <li key={id}>
              <Link href={link} className={activeClass}>
                <SvgIcon name={iconName} />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PagesNav;
