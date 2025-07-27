import { DESCRIPTION_PLACEHOLDER } from "@/data/constants";

export function getInputValueOrFallback(input) {
  if (!input) throw Error("'Input' parameter is undefined");

  const value = input.value || "";

  if (value === "") return input.placeholder || "";

  return valueIsDate(value) ? prettyMonthYear(value) : value;
}

export function getResumeProgress(formStore, decimalPlaces = 0) {
  const allFormsInputs = formStore.getAllInputs();

  const totalInputs = allFormsInputs.length;
  const validInputs = allFormsInputs.filter(
    (input) => input.hasValidValue || !input.required || input.value !== ""
  ).length;

  const percentageValue = (validInputs / totalInputs) * 100;

  return `${percentageValue.toFixed(decimalPlaces)}%`;
}

export function hasFormFilled({ formGroupKey, formsStore }) {
  const formInputs = Object?.values(
    formsStore?.[formGroupKey]?.flat() || formsStore.personalInfoInputs
  ).flat();

  return formInputs.every((input) => input.hasValidValue || !input.required);
}

export function getJobExperienceProps([
  titleInput,
  companyInput,
  [startDateInput, endDateInput],
  descriptionInput,
]) {
  const title = getInputValueOrFallback(titleInput);
  const company = getInputValueOrFallback(companyInput);

  const startDate = prettyMonthYear(startDateInput.value) || "February 2021";

  const formattedEndDate = prettyMonthYear(endDateInput.value) || "Present";
  const endDate = endDateInput.disabled ? "Present" : formattedEndDate;

  const description = descriptionInput.value || DESCRIPTION_PLACEHOLDER;

  return { title, company, startDate, endDate, description };
}

export function getCurrentYearAndMonth() {
  const now = new Date(new Date().getTime());
  const currentYear = now.getFullYear();
  const currentMonth = `${now.getMonth() + 1}`.padStart(2, "0");
  return `${currentYear}-${currentMonth}`;
}

export function getEducationValues(inputs) {
  return inputs.flat().map((input) => getInputValueOrFallback(input));
}

export const valueIsDate = (value) =>
  new Date(value).toString() !== "Invalid Date";

export function prettyMonthYear(value) {
  if (value === "") return "";

  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
