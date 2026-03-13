"use client";

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function FooterSection() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#https://github.com/Felis-Catu",
      color: "hover:text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#https://www.linkedin.com/in/felicity-ann-malong-201240257/",
      color: "hover:text-primary",
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   href: "#",
    //   color: "hover:text-secondary",
    // },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:felicitymalong@gmail.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <footer className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      {/* Garden Scene */}
      <div className="max-w-6xl mx-auto">
        {/* Social Links - Stepping Stones */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className={`w-14 h-14 bg-card soft-shadow rounded-full flex items-center justify-center transition-all duration-300 hover:soft-shadow-hover hover:-translate-y-1 ${social.color}`}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />{" "}
            and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Neko Café Portfolio. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Designed & developed with React, Next.js, and Tailwind CSS
          </p>
        </div>

        {/* Hidden Easter Egg Cats */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => {
              const audio = new Audio(
                "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuDzfLTgjMGHm7A7+OZURE",
              );
              audio.play().catch(() => {});
            }}
            className="text-2xl hover:scale-125 transition-transform cursor-pointer"
            aria-label="Easter egg cat"
          >
            🐱
          </button>
          <button
            onClick={() => {
              const confetti = document.createElement("div");
              confetti.innerHTML = "🐾";
              confetti.style.cssText =
                "position:fixed;top:50%;left:50%;font-size:3rem;pointer-events:none;z-index:9999;animation:confetti 2s ease-out forwards;";
              document.body.appendChild(confetti);
              setTimeout(() => confetti.remove(), 2000);
            }}
            className="text-2xl hover:scale-125 transition-transform cursor-pointer"
            aria-label="Easter egg cat"
          >
            😺
          </button>
        </div>
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
    </footer>
  );
}
