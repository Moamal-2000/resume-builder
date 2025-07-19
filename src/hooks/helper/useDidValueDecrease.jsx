import { useEffect, useRef, useState } from "react";

const useDidValueDecrease = (value) => {
  const [valueDecrease, setValueDecrease] = useState(false);
  const previousValue = useRef(value);

  useEffect(() => {
    const isValueDecreased = parseInt(value) < parseInt(previousValue.current);

    setValueDecrease(isValueDecreased);

    if (value !== previousValue.current) {
      previousValue.current = value;
    }
  }, [value]);

  return valueDecrease;
};

export default useDidValueDecrease;
