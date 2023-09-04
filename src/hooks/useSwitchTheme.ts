import { useState, useEffect } from "react";

const loadItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  } else return "light";
};

const saveItem = <T>(key: string, value: T | unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

function useSwitchTheme() {
  const [mode, setMode] = useState<"light" | "dark">(loadItem("dbntheme"));
  function toggleTheme() {
    const isDark = mode === "dark";
    isDark ? setMode("light") : setMode("dark");
  }

  useEffect(() => {
    const isDark = mode === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    saveItem("dbntheme", mode);
  }, [mode]);
  return { toggleTheme, mode };
}

export default useSwitchTheme;
