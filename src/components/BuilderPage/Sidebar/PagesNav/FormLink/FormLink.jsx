"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getFormLinkClasses } from "@/functions/classNames";
import { hasFormFilled } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./FormLink.module.scss";

const FormLink = ({ linkData, shouldHideTitle }) => {
  const { title, link, iconName, unlockAfter } = linkData;
  const formsStore = useFormsStore((s) => s);
  const pathname = usePathname();

  const isFormFilled = hasFormFilled({
    formGroupKey: unlockAfter,
    formsStore,
  });

  const formLinkClasses = getFormLinkClasses({
    cssModule: s,
    isActive: link === pathname,
    unlockAfter,
    isFormFilled,
    shouldHideTitle,
  });

  return (
    <li className={s.listItem}>
      <Link href={link} className={formLinkClasses}>
        <SvgIcon name={iconName} />
        <span className={s.title}>{title}</span>
      </Link>
    </li>
  );
};

export default FormLink;
