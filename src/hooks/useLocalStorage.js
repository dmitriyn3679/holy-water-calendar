import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const data = localStorage.getItem(key);
      
      if (data) {
        return JSON.parse(data);
      }
  
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (e) {
      throw e;
    }
  });
  
  const save = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  return [value, save];
}
