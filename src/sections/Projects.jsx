import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lineups Feature",
    description:
      "Led production of 1,000+ Valorant lineup videos for Blitz’s in-product Lineups surface with a 6-person team across ideation through publish. Used CMS and metatagging so content surfaced correctly in-product and lifted session retention 10%; rebuilt the workflow and raised sprint video output 30%+.",
    image: "/projects/project1.png",
    tags: [
      "Content Production",
      "Scrum",
      "CMS",
      "Session Retention",
    ],
    link: "https://www.blitz.gg/valorant/lineups",
  },
  {
    title: "Headshot Gallery Pipeline",
    description:
      "Built a Blitz-era educational gallery of 500+ headshot angles so players could study framing between games. Players who spent over two hours in the gallery moved up an average of one rank.",
    image: "/projects/project2.png",
    tags: ["Content Production", "Player Education", "Headshots", "Blitz"],
    link: null,
  },
  {
    title: "Revenue Ops & UA Engine",
    description:
      "Scaled a partnered creator channel across Twitch, YouTube, and TikTok to a 10M+ viewer network with 2,000+ peak CCU. Drove premium subscriptions to 64% of P&L through brand integrations including GamerSupps and HelloFresh; held 99% live uptime and lifted early-stage revenue 45%.",
    image: "/projects/project4.png",
    tags: [
      "Live Ops",
      "P&L Ownership",
      "Brand Partnerships",
      "Creator Telemetry",
    ],
    link: "https://www.twitch.tv/custom",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              match the record.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            In-product content production, creator-platform scale, and community
            ops, tied to roles and metrics on the master resume.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
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
                {project.link && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link ? (
                    <a href={project.link} aria-label={`Open ${project.title}`}>
                      <ArrowUpRight
                        className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                      />
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-surface">
                      Archived
                    </span>
                  )}
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
      </div>
    </section>
  );
};