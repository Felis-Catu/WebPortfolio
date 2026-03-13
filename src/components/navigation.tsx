"use client";

import { Coffee, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
      <div className="max-w-7xl mx-auto bg-card/80 backdrop-blur-lg soft-shadow rounded-full px-8 py-3 flex items-center justify-between">
        {/* Name/Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-display text-xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Felicity Ann Malong
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
          >
            Contact
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-accent" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
