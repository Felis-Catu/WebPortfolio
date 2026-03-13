"use client";

const skills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Git", icon: "🔀", category: "Tools" },
  { name: "JavaScript", icon: "💛", category: "Language" },
  { name: "HTML/CSS", icon: "🌐", category: "Frontend" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "Figma", icon: "🎯", category: "Design" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-muted-foreground font-mono">~ My Toolkit ~</p>
        </div>

        {/* Skills Display - Cat-themed Shelf */}
        <div className="relative">
          {/* Shelf Brackets */}
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-muted to-muted/50 rounded-full" />
          <div className="absolute -right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-muted to-muted/50 rounded-full" />

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Skill "Can" or "Toy" */}
                <div className="bg-card soft-shadow rounded-2xl p-6 hover:soft-shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:animate-bounce">
                    {skill.icon}
                  </div>
                  <p className="font-medium text-sm mb-1">{skill.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {skill.category}
                  </p>
                </div>

                {/* Tooltip/Speech Bubble */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="bg-foreground text-background px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap">
                    {skill.name}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Cats on Shelf 
          <div className="mt-12 flex justify-center gap-8">
            <div
              className="text-3xl animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              🐈
            </div>
            <div
              className="text-3xl animate-bounce"
              style={{ animationDuration: "3s", animationDelay: "0.5s" }}
            >
              🐈‍⬛
            </div>
            <div
              className="text-3xl animate-bounce"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              🐱
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
