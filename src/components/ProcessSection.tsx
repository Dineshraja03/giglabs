import { useState } from "react";

const processes = [
  {
    id: "01",
    title: "Ideation",
    content: "We brainstorm and explore creative possibilities to find the perfect solution for your brand.",
  },
  {
    id: "02",
    title: "Discovery",
    content: "Deep dive into understanding your business, users, and market to inform our strategy.",
  },
  {
    id: "03",
    title: "UX Design",
    content: "A Product UI UX design agency blending strategy, creativity and We make them more meaningful, memorable, intuitive and help more meaningful. Our customers are B2B companies, tech new startups and brands that want to tell their sites through their brand new websites.",
  },
  {
    id: "04",
    title: "UI Design",
    content: "Creating beautiful, pixel-perfect interfaces that bring your brand to life.",
  },
  {
    id: "05",
    title: "Development",
    content: "Building robust, scalable solutions using cutting-edge technologies.",
  },
];

const ProcessSection = () => {
  const [activeProcess, setActiveProcess] = useState("03");

  const activeItem = processes.find((p) => p.id === activeProcess);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">
            Whats the <span className="italic">process?</span>
          </h2>
          {/* Decorative shapes */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full" />
            <div className="w-8 h-8 bg-yellow-400 rotate-45" />
            <div className="w-6 h-6 bg-accent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Process List */}
          <div className="space-y-4">
            {processes.map((process) => (
              <button
                key={process.id}
                onClick={() => setActiveProcess(process.id)}
                className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                  activeProcess === process.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <span className="text-sm mr-4">{process.id}.</span>
                <span className="font-medium">{process.title}</span>
              </button>
            ))}
          </div>

          {/* Active Process Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">{activeItem?.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {activeItem?.content}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our customers are B2B companies, tech new startups and brands that want to tell their 
              sites through their brand new websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
