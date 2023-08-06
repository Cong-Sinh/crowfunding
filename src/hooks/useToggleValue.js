import { useState } from "react";

export default function UseToggleValue(initialValue = false) {
  const [values, setValue] = useState(initialValue);

  const handleToggleValue = () => {
    setValue(!values);
  };
  return {
    values,
    handleToggleValue,
  };
}
