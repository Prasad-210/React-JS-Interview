import { useState } from "react";

/**
 * Custom hook to manage a single form input
 */
export default function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initialValue);

  return {
    value,
    onChange,
    reset,
  };
}
