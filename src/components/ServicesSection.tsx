import { Code, Brain, Cloud, Settings, Building2, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Application Services",
    description: "Custom software solutions tailored to meet your specific business objectives using modern engineering principles.",
    tagline: "Build modern applications that drive business growth",
    features: [
      "Full-stack web and mobile development",
      "Enterprise application modernization",
      "Microservices architecture design",
      "API development and integration",
      "Quality assurance and testing",
      "Application maintenance and support",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Data & AI",
    description: "Unlock the full potential of your data with our advanced Data and AI services.",
    tagline: "Drive solutions for your most pressing problems with data-driven insights",
    features: [
      "Machine learning model development",
      "Data analytics and visualization",
      "Artificial intelligence implementation",
      "Predictive analytics solutions",
      "Natural language processing",
      "Computer vision applications",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Whether you're looking to migrate your infrastructure to the cloud, optimize existing cloud environments, or develop cloud-native applications.",
    tagline: "Find the right balance of public, private, or hybrid cloud that benefits your business",
    features: [
      "Cloud migration and strategy",
      "Infrastructure as Code (IaC)",
      "Cloud security and compliance",
      "Cost optimization",
      "Multi-cloud management",
      "Cloud-native application development",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Settings,
    title: "Business Process Services",
    description: "At Giglabs, we specialize in providing comprehensive business process services designed to optimize efficiency, streamline operations, and drive growth.",
    tagline: "Harness new technologies, data, and human ingenuity to embrace the future",
    features: [
      "Process automation and optimization",
      "Business process consulting",
      "Workflow redesign and implementation",
      "RPA (Robotic Process Automation)",
      "Business intelligence solutions",
      "Operational efficiency improvements",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Our Enterprise Services are designed to empower organizations with scalable, secure, and efficient solutions.",
    tagline: "Design modern business frameworks to maximize benefits of smart transformations",
    features: [
      "Enterprise architecture design",
      "Digital transformation strategy",
      "Scalable system infrastructure",
      "Enterprise integration services",
      "Security and compliance management",
      "Business continuity solutions",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: MessageSquare,
    title: "Consulting Services",
    description: "Our Consulting Services offer strategic guidance and expertise to help organizations navigate complex challenges.",
    tagline: "Reimagine your organization and turn big visions into realities",
    features: [
      "Strategic business consulting",
      "Technology strategy and planning",
      "Digital transformation roadmap",
      "Change management consulting",
      "Competitive analysis and positioning",
      "Innovation and growth strategies",
    ],
    color: "from-rose-500 to-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From custom software development to cloud computing and AI integration, we offer a full suite of services to support your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ServiceIcon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-medium">
                  {service.tagline}
                </p>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text hover:gap-3 transition-all group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 text-orange-600 dark:text-orange-400 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss which of our services best fits your needs and how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:gap-3"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
