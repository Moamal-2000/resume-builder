export function getUpdatedInputs({
  inputs,
  name,
  value,
  required,
  isValidValue,
}) {
  return inputs.map((input) => {
    const hasSubInputs = Array.isArray(input);

    if (hasSubInputs) {
      return input.map((subInput) =>
        updateValue({
          input: subInput,
          name,
          value,
          required,
          isValidValue,
        })
      );
    }

    return updateValue({ input, name, value, required, isValidValue });
  });
}

export function updateValue({ input, name, value, required, isValidValue }) {
  if (input.name !== name) return input;

  return {
    ...input,
    value: value !== undefined ? value : input.value,
    required: required !== undefined ? required : input.required,
    isValidValue,
  };
}

export function updateEndDateRequiredByStatus(updatedInputs) {
  const currentlyWorkingInput = updatedInputs.find(
    ({ name }) => name === "currentlyWorking"
  );

  const currentlyWorkingChecked = currentlyWorkingInput?.value;

  return getUpdatedInputs({
    inputs: updatedInputs,
    name: "endDate",
    required: !currentlyWorkingChecked,
  });
}
