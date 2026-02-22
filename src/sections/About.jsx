import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Systems Architecture",
    description:
      "Architecting robust, scalable backend infrastructure from the ground up.",
  },
  {
    icon: Rocket,
    title: "Pareto Optimization",
    description:
      "Maximizing system efficiency and product impact through analytical problem solving.",
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description: "Bridging engineering and product vision to drive agile, on-time delivery.",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Execution",
    description:
      "Transforming user metrics and root cause analysis into actionable technical solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              Technical Product Manager with six years of experience driving impact across 
              high-scale gaming platforms and entrepreneurial ventures. I specialize in Product
               Lifecycle Management, retention scaling, and A/B experimentation for products
                serving over 2.5 million monthly active users.
              </p>
              <p>
              My approach combines rigorous data analytics with technical principles. At Blitz.gg, I managed roadmaps that increased session time by 15% and delivered scalable architecture for high-concurrency tools. As a Founder, I architected production pipelines that optimized user acquisition for a network of 10 million viewers, achieving a 45% lift in conversion through data-informed strategy.
              </p>
              <p>
              Currently completing a BS in Computer Science to further bridge the gap between technical requirements and product vision. My strategy is uniquely informed by my background as a professional esports athlete, leveraging deep meta-analysis and native player empathy to build systems that deliver measurable business impact. 
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to fuse product leadership with technical excellence, building
                 scalable architecture that drives measurable impact."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
