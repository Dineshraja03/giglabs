import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Code, Brain, Cloud, Settings, Building2, MessageSquare, CheckCircle } from "lucide-react";

const servicesData = [
  {
    icon: Code,
    title: "Application Services",
    description: "With deep understanding of industry trends and cutting-edge technologies, our team of experts is dedicated to crafting customized software solutions tailored to your specific needs.",
    features: [
      "Tailored Solutions for Your Unique Needs",
      "Expertise in Cutting-Edge Technologies",
      "Agile Development Process",
      "Comprehensive Support and Maintenance",
    ],
  },
  {
    icon: Brain,
    title: "Data & AI",
    description: "We partner with our clients to drive solutions for their most pressing problems. No matter where you are on your data and AI journey, we'll meet you there.",
    features: [
      "Machine Learning & Deep Learning",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "We help you in finding the right balance of public, private or hybrid cloud that benefits your business the most with comprehensive cloud solutions.",
    features: [
      "AWS Cloud Services",
      "Azure & Google Cloud",
      "Cloud Migration Strategy",
      "Managed Cloud Services",
    ],
  },
  {
    icon: Settings,
    title: "Business Process Services",
    description: "Harness the exciting potential of new technologies, data and human ingenuity, so your organization can embrace the AI-powered future and reap the benefits, faster.",
    features: [
      "Process Automation",
      "Workflow Optimization",
      "Digital Transformation",
      "Operational Excellence",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "We assist clients in designing modern business frameworks to maximize the benefits of smart solution transformations, overcoming integration challenges.",
    features: [
      "SAP Implementation",
      "Salesforce Integration",
      "ERP Solutions",
      "Legacy Modernization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Experience that propels you forward. You can reimagine your organization and take practical steps to turn big visions into practical realities.",
    features: [
      "Strategic Planning",
      "Technology Assessment",
      "Digital Roadmapping",
      "Change Management",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b-2 border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-mono uppercase tracking-widest mb-4 text-muted-foreground">
                Our Services
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Full Suite of Digital Services
              </h1>
              <p className="text-xl text-muted-foreground">
                From custom software development and mobile app solutions to cloud computing and AI integration, 
                we offer comprehensive services to support your digital transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <service.icon className="w-12 h-12 mb-6" strokeWidth={1.5} />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-secondary border-2 border-border h-64 lg:h-80 flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <service.icon className="w-24 h-24 text-muted-foreground/50" strokeWidth={1} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
