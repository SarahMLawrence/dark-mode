import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  useEffect(() => {
    // if true - add dark-mode to body
    if (darkMode == true) {
      document.body.classList.add("dark-mode");
    } else if (darkMode == false) {
      // if false - remove dark-mode from body
      document.body.classList.remove("dark-mode");
      
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
