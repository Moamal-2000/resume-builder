import { DESCRIPTION_PLACEHOLDER, MONTH_NAMES } from "@/data/constents";

export function getInputValueOrFallback(input) {
  if (!input) throw Error("'Input' parameter is undefined");

  return input.value === "" ? input.placeholder : input.value;
}

export function getResumeProgress(formsStore, decimalPlaces = 0) {
  const allFormsInputs = Object.values(formsStore).slice(0, -1).flat();
  const totalInputs = allFormsInputs.length;
  const validInputs = allFormsInputs.filter(
    (input) => input.hasValidValue
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

  const startDate = getFormattedDate(startDateInput.value) || "February 2021";

  const formattedEndDate = getFormattedDate(endDateInput.value) || "Present";
  const endDate = endDateInput.disabled ? "Present" : formattedEndDate;

  const description = descriptionInput.value || DESCRIPTION_PLACEHOLDER;

  return { title, company, startDate, endDate, description };
}

export function getMonthName(monthNumber) {
  if (monthNumber < 1 || monthNumber > 12) return "Invalid month";
  return MONTH_NAMES[monthNumber - 1];
}

export function getFormattedDate(dateStr) {
  if (!dateStr) return false;

  const [year, month] = dateStr.split("-");
  return `${getMonthName(month)} ${year}`;
}

export function getCurrentYearAndMonth() {
  const now = new Date(new Date().getTime());
  const currentYear = now.getFullYear();
  const currentMonth = `${now.getMonth() + 1}`.padStart(2, "0");
  return `${currentYear}-${currentMonth}`;
}
