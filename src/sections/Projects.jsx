import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Lineups Feature",
    description:
      "Owned the roadmap and Product Lifecycle Management for educational features serving 2.5M+ MAUs. Leveraged A/B testing and user telemetry to prioritize updates that drove a 15% increase in session time.",
    image: "/projects/project1.png",
    tags: ["Product Roadmapping", "A/B Testing", "User Telemetry", "Product Growth"],
    link: "https://www.blitz.gg/valorant/lineups",
  },
  {
    title: "Headshot Gallery Pipeline",
    description:
      "Architected a scalable delivery pipeline for 1,000+ digital assets by implementing Scrum frameworks. Optimized workflows to reduce SLA turnaround times by 20% while achieving a 95% on-time sprint completion rate.",
    image: "/projects/project2.png",
    tags: ["Agile/Scrum", "SLA Optimization", "KPIs/OKRs", "Pipeline Architecture"],
    link: "#",
  },
  {
    title: "Valorant Weapons Analytics",
    description:
      "Led cross-functional development of a high-concurrency diagnostic tool for competitive gamers. Authored technical PRDs and collaborated with engineering to ensure scalable architecture, delivering a 30% lift in feature engagement.",
    image: "/projects/project3.png",
    tags: ["Technical PRD Authoring", "Cross-Functional Leadership", "Scalable Architecture", "Feature Engagement"],
    link: "https://www.blitz.gg/valorant/weapons",
  },
  {
    title: "Revenue Ops & UA Engine",
    description:
      "Directed revenue operations and P&L for strategic brand partnerships. Executed data-driven user-acquisition campaigns that drove a 45% lift in conversion across a network of 10M+ viewers.",
    image: "/projects/project4.png",
    tags: ["Revenue Operations", "User Acquisition", "CRO", "P&L Management"],
    link: "https://www.twitch.tv/custom",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A ledger of high-throughput media pipelines, data-driven product roadmaps, 
            and robust systems engineered for scalable stability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {/*<a
                  href={project.github}
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>*/}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/*<div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>*/}
      </div>
    </section>
  );
};
