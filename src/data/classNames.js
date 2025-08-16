export function experienceTabClasses({
  cssModule,
  activeIndex,
  hasFormFilled,
}) {
  return [
    cssModule.mainTab,
    activeIndex === 0 ? cssModule.active : "",
    hasFormFilled ? "" : cssModule.invalidForm,
  ].join(" ");
}
