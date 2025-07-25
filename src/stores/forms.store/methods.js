export function getUpdatedInputs({
  inputs,
  name,
  value,
  required,
  disabled,
  hasValidValue,
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
          disabled,
          hasValidValue,
        })
      );
    }

    return updateValue({
      input,
      name,
      value,
      required,
      disabled,
      hasValidValue,
    });
  });
}

export function updateValue({
  input,
  name,
  value,
  required,
  disabled = false,
  hasValidValue,
}) {
  if (input.name !== name) return input;

  return {
    ...input,
    value: value !== undefined ? value : input.value,
    required: required !== undefined ? required : input.required,
    hasValidValue,
    disabled,
  };
}

export function getCurrentlyWorkingStatus(inputs) {
  return inputs.find(({ name }) => name === "currentlyWorking")?.value;
}

export function setEndDateRequired(inputs, isRequired) {
  return getUpdatedInputs({
    inputs,
    name: "endDate",
    required: isRequired,
  });
}

export function setEndDateDisabled(inputs, isDisabled) {
  return getUpdatedInputs({
    inputs,
    name: "endDate",
    hasValidValue: !isDisabled,
    disabled: isDisabled,
  });
}
