export function experienceTabClasses({
  cssModule,
  activeIndex,
  index,
  hasFormFilled,
}) {
  return [
    cssModule.tab,
    activeIndex === index ? cssModule.active : "",
    hasFormFilled ? "" : cssModule.invalidForm,
  ].join(" ");
}
