import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.theme = newTheme;
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(newTheme);
  };

  if (theme === undefined) return null;
  return (
    <div className="text-black dark:text-white w-4">
      {theme === "light" ? (
        <MoonIcon onClick={toggleTheme} />
      ) : (
        <SunIcon onClick={toggleTheme} />
      )}
    </div>
  );
};
