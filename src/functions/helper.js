export function getInputValueOrFallback(input) {
  if (!input) throw Error("'Input' parameter is undefined");

  return input.value === "" ? input.placeholder : input.value;
}

export function getResumeProgress(formsStore, decimalPlaces = 0) {
  const allFormsInputs = Object.values(formsStore).slice(0, -1).flat();
  const totalInputs = allFormsInputs.length;
  const validInputs = allFormsInputs.filter(
    (input) => input.isValidValue
  ).length;

  const percentageValue = (validInputs / totalInputs) * 100;

  return `${percentageValue.toFixed(decimalPlaces)}%`;
}
