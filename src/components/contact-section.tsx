"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 px-4 bg-muted/30 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-muted-foreground font-mono">~ Get In Touch ~</p>
        </div>

        <div className="bg-card soft-shadow rounded-3xl p-8 md:p-12">
          {/* Guestbook Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Contact Form
            </h3>
            <p className="text-muted-foreground">Drop me a message!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="e.g., Felix the Developer"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="felix@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Tell me about your project, ideas, or just say hi! 👋"
              />
            </div>

            {/* Submit Button with Paw Print */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-accent text-foreground rounded-full font-medium text-lg hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-3 group hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <span>✓ Message Sent!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Decorative Paw Prints 
          <div className="mt-8 flex justify-center gap-4 opacity-30">
            <span className="text-2xl">🐾</span>
            <span className="text-2xl">🐾</span>
            <span className="text-2xl">🐾</span>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
