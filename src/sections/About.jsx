import { Activity, Film, MessageSquare, Users } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Community Ops",
    description:
      "Discord growth, weekly programming, and member experience for competitive audiences.",
  },
  {
    icon: MessageSquare,
    title: "Support & Commerce",
    description:
      "Player support and Shopify ops, including AI ticket pipelines that cut handling time.",
  },
  {
    icon: Film,
    title: "Content Production",
    description:
      "1,000+ videos with a 6-person team; CMS and Scrum workflows that lifted session retention 10% and sprint output 30%+.",
  },
  {
    icon: Activity,
    title: "Telemetry & Iteration",
    description:
      "Live-stream telemetry, content loops, and retention signals. Test, read the numbers, and tighten the next sprint so output and quality climb together.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building for players,
              <span className="font-serif italic font-normal text-white">
                {" "}
                in public.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Product-minded operator for gaming communities and live
                platforms, spanning competitive play, in-product content
                production, partnered creator ops, and esports community
                management.
              </p>
              <p>
                As a Twitch Partnered Content Creator (2023–2026), I scaled
                distribution across Twitch, YouTube, and TikTok to a 10M+ viewer
                network, reached 2,000+ peak CCV, and drove premium
                subscriptions to 64% of P&amp;L through brand integrations
                including GamerSupps and HelloFresh.
              </p>
              <p>
                At Blitz.gg I led production of 1,000+ Valorant lineup videos
                with a 6-person team and Scrum workflows that raised sprint
                video output 30%+. Now at M80 Esports I run Discord, support,
                and Shopify commerce ops, with AI ticket pipelines that cut
                handling time 40%. Completing a B.S. in Computer Science at WGU
                (expected 2027); Certified ScrumMaster.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &quot;I care about systems that help players and communities
                move faster: clear ops, tight feedback loops, and work that
                holds up under live traffic.&quot;
              </p>
            </div>
          </div>

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