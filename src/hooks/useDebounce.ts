import React, { useEffect, useState } from 'react';

export default function useDebounce(
  value: string,
  delay = 500,
): [string, React.Dispatch<React.SetStateAction<string>>, string] {
  const [state, setState] = useState(value);
  const [debouncedValue, setDebouncedValue] = useState(state);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, state]);

  return [state, setState, debouncedValue];
}
