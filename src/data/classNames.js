export function experienceTabClasses({
  cssModule,
  activeIndex,
  hasFormFilled,
}) {
  return [
    cssModule.tab,
    activeIndex === 0 ? cssModule.active : "",
    hasFormFilled ? "" : cssModule.invalidForm,
  ].join(" ");
}
