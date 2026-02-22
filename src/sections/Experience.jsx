const experiences = [
{
    period: "Jan 2023 — Present",
    role: "Founder & Product Lead",
    company: "Lovelace Digital Media",
    description: "Defined the product vision and operational roadmap for a digital media brand, establishing standardized quality gates and production sprints for a cross-functional team. Architected an end-to-end production pipeline that utilized asynchronous feedback loops to scale content output for a network reaching 10M+ viewers.",
    technologies: ["Revenue Operations", "Pipeline Architecture", "UA Strategy", "P&L Management"],
    current: true,
  },
{
    period: "Jun 2020 — Jan 2023",
    role: "Product Manager",
    company: "Blitz.gg",
    description: "Owned the roadmap for core educational features serving 2.5M+ MAUs, utilizing A/B testing to prioritize updates that drove a 15% increase in session time. Led cross-functional development of a high-concurrency diagnostic tool from ideation to launch, collaborating with engineering to ensure scalable architecture.",
    technologies: ["Agile/Scrum", "A/B Testing", "Product Roadmapping", "Technical PRDs"],
    current: false,
  },
  {
    period: "Mar 2020 — Jun 2020",
    role: "Professional Esports Athlete",
    company: "Lazarus Esports",
    description: "Led team strategy and tactical execution at the highest tier of competitive play, analyzing patch data and game mechanics to secure a Top 3 tournament placement. Cultivated a highly engaged community through competitive streaming, leveraging native player empathy to drive a 10% lift in organic viewership.",
    technologies: ["Meta Analysis", "Team Leadership", "Telemetry Analysis", "Player Empathy"],
    current: false,
  },
  
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A chronological roadmap of data-driven execution, progressing from root-cause 
            competitive analytics to owning enterprise features deployed to millions of users.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
