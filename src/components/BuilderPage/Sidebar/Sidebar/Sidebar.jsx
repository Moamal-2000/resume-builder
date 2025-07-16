"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { BUILDER_SIDEBAR_PAGES } from "@/data/builderPages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={s.sidebar}>
      <button type="button">
        <SvgIcon name="menu" />
      </button>

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
    </aside>
  );
};

export default Sidebar;
