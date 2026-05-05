"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-2 border-(--border-primary) shadow-[2px_2px_0px_0px_var(--border-primary)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
