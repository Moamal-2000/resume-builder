export function getUpdatedInputs({ inputs, name, value, type, isValidValue }) {
  return inputs.map((input) => {
    const hasSubInputs = Array.isArray(input);

    if (hasSubInputs) {
      return input.map((subInput) =>
        updateValue({ input: subInput, name, value, type, isValidValue })
      );
    }

    return updateValue({ input, name, value, type, isValidValue });
  });
}

export function updateValue({ input, name, type, value, isValidValue }) {
  if (input.name !== name) return input;

  return { ...input, value, isValidValue };
}
