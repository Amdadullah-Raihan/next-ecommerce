"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/utils/cn";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);

    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative flex items-center justify-center w-10 h-10 overflow-hidden cursor-pointer "
    >
      {/* Sun icon */}
      <Sun
        size={24}
        className={cn(
          "absolute transition-all duration-300 transform",
          dark ? "rotate-0 opacity-100" : "rotate-[45deg] opacity-0"
        )}
      />
      {/* Moon icon */}
      <Moon
        size={24}
        className={cn(
          "absolute transition-all duration-300 transform",
          dark ? "-rotate-[90deg] opacity-0" : "rotate-0 opacity-100"
        )}
      />
    </button>
  );
}
