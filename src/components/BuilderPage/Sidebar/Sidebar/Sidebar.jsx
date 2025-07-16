"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { BUILDER_SIDEBAR_PAGES } from "@/data/builderPages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();
  const resumeProgress = "10%";

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

      <div className={s.progressBar}>
        <span className={s.title}>Progress</span>

        <div className={s.barWrapper}>
          <div className={s.bar}>
            <div className={s.progress} style={{ width: resumeProgress }}></div>
          </div>
          <span className={s.percentage}>{resumeProgress}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
