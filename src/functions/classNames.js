export function getFormLinkClasses({
  cssModule,
  isActive,
  unlockAfter,
  isFormFilled,
  shouldHideTitle,
}) {
  const activeClass = isActive ? cssModule.active : "";
  const hideTitleClass = shouldHideTitle ? cssModule.hideTitle : "";

  let disableClass = !isFormFilled ? cssModule.disabled : "";
  if (unlockAfter === "none") disableClass = "";

  return `${activeClass} ${disableClass} ${hideTitleClass}`;
}

export function getProgressBarClasses({
  cssModule,
  shouldShow,
  isProgressDecreased,
}) {
  const hideClass = shouldShow ? "" : cssModule.hide;
  const decreaseClass = isProgressDecreased ? cssModule.decrease : "";

  return `${cssModule.progressBar} ${hideClass} ${decreaseClass}`;
}
