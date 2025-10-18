"use client";

import { Sun, Moon } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

import { Button } from "@/components/ui/button";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={toggleTheme}
      className="flex items-center space-x-2 hover:cursor-pointer"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </Button>
  );
}
