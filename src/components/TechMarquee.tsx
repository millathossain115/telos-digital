"use client";

const TECH_STACK = [
  { name: "TypeScript", role: "Type Safety" },
  { name: "Next.js", role: "React Framework" },
  { name: "Tailwind CSS", role: "Design Engine" },
  { name: "React Native", role: "iOS & Android" },
  { name: "Node.js", role: "Runtime" },
  { name: "PostgreSQL", role: "Relational Data" },
  { name: "Amazon Web Services", role: "Cloud Scale" },
  { name: "Redis", role: "Caching Layer" },
  { name: "Docker", role: "Containerization" },
  { name: "GraphQL", role: "API Schema" },
];

export function TechMarquee() {
  return (
    <section className="relative py-12 border-y border-neutral-900 bg-neutral-950/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Engineered with battle-tested modern foundations
        </p>
      </div>

      {/* Infinite Ribbon Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max items-center gap-6 py-2 animate-marquee">
          {/* Double list to create seamless loop */}
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-colors backdrop-blur-sm group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-amber-600/80 group-hover:bg-white transition-colors" />
              <span className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors">
                [{tech.role}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
