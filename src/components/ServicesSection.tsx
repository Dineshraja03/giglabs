import { Code, Brain, Cloud, Settings, Building2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Application Services",
    description: "Custom software solutions tailored to meet your specific business objectives using modern engineering principles.",
  },
  {
    icon: Brain,
    title: "Data & AI",
    description: "Drive solutions for your most pressing problems with data-driven insights and AI-powered automation.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Find the right balance of public, private, or hybrid cloud that benefits your business the most.",
  },
  {
    icon: Settings,
    title: "Business Process Services",
    description: "Harness new technologies, data, and human ingenuity to embrace the AI-powered future.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Design modern business frameworks to maximize benefits of smart solution transformations.",
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Reimagine your organization and take practical steps to turn big visions into realities.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary border-b-2 border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono uppercase tracking-widest mb-4 text-muted-foreground">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From custom software development to cloud computing and AI integration, 
            we offer a full suite of services to support your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group bg-background border-2 border-border p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <service.icon className="w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 group-hover:underline underline-offset-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
