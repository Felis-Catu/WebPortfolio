"use client";

import { Heart, Code, Coffee, Sparkles } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function AboutSection() {
  const traits = [
    { icon: Code, label: "Problem Solver", color: "text-accent" },
    { icon: Heart, label: "Team Player", color: "text-primary" },
    { icon: Coffee, label: "Coffee Enthusiast", color: "text-secondary" },
    { icon: Sparkles, label: "Detail Oriented", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Photo */}
          <ScrollReveal delay={100}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-card soft-shadow rounded-full overflow-hidden flex items-center justify-center text-9xl">
                  👨‍💻
                </div>
                {/* Floating Decorations */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent soft-shadow rounded-full flex items-center justify-center text-2xl animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  ☕
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary soft-shadow rounded-full flex items-center justify-center text-2xl animate-bounce"
                  style={{ animationDuration: "2s", animationDelay: "0.5s" }}
                >
                  🐾
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio Content */}
          <div className="space-y-8">
            <ScrollReveal delay={200}>
              <div className="bg-card soft-shadow rounded-3xl p-8">
                <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
                  Hi, I'm Felicity!
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I'm a Computer Science student and developer who enjoys
                  building full-stack applications, backend systems, and games.
                </p>
                <p>
                  I’ve worked on projects ranging from Unity hackathon games to
                  data dashboards that integrate multiple services into a single
                  interface. I enjoy designing clean interfaces and building
                  reliable systems behind them.
                </p>
              </div>
            </ScrollReveal>

            {/* Personality Traits */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <ScrollReveal key={index} delay={300 + index * 80}>
                  <div className="bg-card soft-shadow rounded-2xl p-6 hover:soft-shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <trait.icon
                      className={`w-8 h-8 mb-3 ${trait.color} group-hover:animate-bounce`}
                    />
                    <p className="font-medium text-sm">{trait.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
