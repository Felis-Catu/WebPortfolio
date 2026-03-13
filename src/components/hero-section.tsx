"use client";

import {
  Github,
  Linkedin,
  FileText,
  Gamepad2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import meImg from "@/app/images/MeFishing.png";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Felicity Ann Malong
            </h1>

            {/* Title */}
            <p className="font-mono text-muted-foreground tracking-wider text-lg">
              Front-End Developer based in Winnipeg, Manitoba
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Design-focused full-stack developer building scalable, data-driven
              interfaces.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-6 soft-shadow hover:soft-shadow-hover transition-all"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 soft-shadow hover:soft-shadow-hover transition-all"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Felis-Catu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card soft-shadow hover:soft-shadow-hover hover:scale-105 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" />
              </a>
              <a
                href="https://feliscatu.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card soft-shadow hover:soft-shadow-hover hover:scale-105 transition-all"
                aria-label="Itch.io"
              >
                <Gamepad2 className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/felicity-ann-malong-201240257/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card soft-shadow hover:soft-shadow-hover hover:scale-105 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="flex justify-center">
            <div className="bg-card soft-shadow rounded-3xl p-8 w-full max-w-md aspect-square flex items-center justify-center">
              <Image
                src={meImg}
                alt="Profile"
                className="rounded-2xl w-full h-full object-cover object-top "
              />
            </div>
          </div>
        </div>
      </div>
      {/* View More at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <p className="text-sm text-muted-foreground font-mono">View More</p>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce group-hover:text-accent transition-colors" />
        </button>
      </div>
    </section>
  );
}
