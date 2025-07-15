import SvgIcon from "@/components/Shared/SvgIcon";
import { BUILDER_SIDEBAR_PAGES } from "@/data/staticData";
import Link from "next/link";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.pagesNav}>
        <ul>
          {BUILDER_SIDEBAR_PAGES.map(({ title, link, iconName, id }) => (
            <li key={id}>
              <Link href={link}>
                <SvgIcon name={iconName} />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
