export function getInputValueOrFallback(input) {
  if (!input) throw Error("'Input' parameter is undefined");

  return input.value === "" ? input.placeholder : input.value;
}

export function getResumeProgress(formsStore) {
  const allFormsInputs = Object.values(formsStore).slice(0, -1).flat();
  const totalInputs = allFormsInputs.length;
  const validInputs = allFormsInputs.filter(
    (input) => input.isValidValue
  ).length;

  return `${(validInputs / totalInputs) * 100}%`;
}
