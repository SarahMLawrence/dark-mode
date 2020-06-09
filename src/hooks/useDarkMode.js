import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  useEffect(() => {
    if (darkMode == true) {
      document.body.classList.add("dark-mode");
    } else if (darkMode == false) {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [ darkMode, setDarkMode ];
};
