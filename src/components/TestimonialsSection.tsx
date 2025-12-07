import { useState } from "react";

const testimonials = [
  {
    quote: "Everyone's raving about the new logo Bestofstep created for us and it's already getting so much traction online!",
    author: "Leslie Alexander",
    role: "Creative Director",
  },
  {
    quote: "Giglabs transformed our digital presence completely. Their team understood our vision from day one.",
    author: "Michael Chen",
    role: "CEO, TechStart",
  },
  {
    quote: "The best investment we've made in our company's digital journey. Highly recommend their services.",
    author: "Sarah Johnson",
    role: "Marketing Head",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Clients' <span className="italic">reviews</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
            "{testimonials[activeIndex].quote}"
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-secondary rounded-full mb-3 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary" />
            </div>
            <p className="font-semibold">{testimonials[activeIndex].author}</p>
            <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
