"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import useFormsStore from "@/stores/forms.store/forms.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./FormLink.module.scss";

const FormLink = ({ linkData, shouldHideTitle }) => {
  const { title, link, iconName, unlockAfter } = linkData;
  const formsStore = useFormsStore((s) => s);
  const pathname = usePathname();
  const activeClass = link === pathname ? s.active : "";

  const formInputs = Object?.values(
    formsStore?.[unlockAfter] || formsStore.personalInfoInputs
  );

  const isFormFilled = formInputs
    .flat()
    .every((input) => input.isValidValue || !input.required);

  let disableClass = !isFormFilled ? s.disabled : "";
  const hideTitleClass = shouldHideTitle ? s.hideTitle : "";
  if (unlockAfter === "none") disableClass = "";

  return (
    <li className={s.listItem}>
      <Link
        href={link}
        className={`${activeClass} ${disableClass} ${hideTitleClass}`}
      >
        <SvgIcon name={iconName} />
        <span className={s.title}>{title}</span>
      </Link>
    </li>
  );
};

export default FormLink;
