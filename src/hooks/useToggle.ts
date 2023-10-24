import { useState } from 'react';

type UseToggleReturnType = [boolean, () => void];

export default function useToggle(
  defaultValue: boolean
): UseToggleReturnType {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggleValue];
}
