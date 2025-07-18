export function getInputValueOrFallback(input) {
  if (!input) throw Error("'Input' parameter is undefined");

  return input.value === "" ? input.placeholder : input.value;
}
