import { STOP_BUILDER_PROTECTION } from "@/data/constants";

export function getFormLinkClasses({
  cssModule,
  isActive,
  unlockAfter,
  isFormFilled,
  shouldHideTitle,
}) {
  const activeClass = isActive ? cssModule.active : "";
  const menuClosedClass = shouldHideTitle ? cssModule.menuClosed : "";

  let disableClass =
    !isFormFilled && !STOP_BUILDER_PROTECTION ? cssModule.disabled : "";

  if (unlockAfter === "none") disableClass = "";

  return `${activeClass} ${disableClass} ${menuClosedClass}`;
}
