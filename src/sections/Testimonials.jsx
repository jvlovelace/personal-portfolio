import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Jonathan doesn't just manage a roadmap, he guts inefficient pipelines and rebuilds them. When he took over our educational features, he ripped out the old workflow and built a tracking system that immediately tanked our turnaround times. He's the rare PM who actually grasps engineering constraints. You don't hand-hold him. Point him at a complex problem and watch him go.",
    author: "Max Lager",
    role: "Senior Product Manager, Blitz.gg",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQE6bxQQxCjIzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670529620054?e=1773273600&v=beta&t=OQvwerinvVjwcO2ggujJt9PZcDo6IB_uxAvYb-uo3mU",
  },
  {
    quote:
      "Most players just grind mechanics to get better, but Jonathan brought a completely different level of preparation to our roster. He was the one tearing apart VODs to figure out exactly why we were losing rounds. He identified where our execution broke down and forced the team to adapt based on actual competitor habits. That systematic approach is what pushed us to our first Top 3 finish in Valorant.",
    author: "Kyle Vognsen",
    role: "General Manager, Lazarus Esports",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQH6YLAYdKbLzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702500941605?e=1773273600&v=beta&t=cgAZBnRXCSIOaNvZdptaPXT2QjaeCKzJTVk1Cr2pwDw",
  },
  {
    quote:
      "Working with creators usually means chasing them for deliverables, but Jonathan actually treats his content like a real business. For the Factor campaign, he dug into his analytics and optimized his strategy on the fly to maximize conversions. It's incredibly rare to find someone in this space who cares that much about the actual performance data.",
    author: "Kelly Sheng",
    role: "Creator Success Manager, StreamElements",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQHvWPvK53jzhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697637682407?e=1773273600&v=beta&t=M5yV-apGYLU052Y8_SqBYp0QAOM_uOI70geuPu6C3I8",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
