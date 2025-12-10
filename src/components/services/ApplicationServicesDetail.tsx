import { Code, CheckCircle, Zap, Users, TrendingUp, Shield, ArrowRight, Layers, Cpu, Gauge, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationServicesDetail = () => {
  const features = [
    "Full-stack web development",
    "Mobile app development",
    "Enterprise application modernization",
    "Microservices architecture",
    "API development and integration",
    "Quality assurance and testing",
    "Application maintenance and support",
    "Cloud-native applications",
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Rapid development cycles with agile methodologies",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers across all technology stacks",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Build applications that grow with your business",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and compliance",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const technologies = [
    { name: "React / Vue.js / Angular", icon: Layers },
    { name: "Node.js / Python / Java", icon: Cpu },
    { name: "AWS / Azure / GCP", icon: Gauge },
    { name: "Docker / Kubernetes", icon: Lock },
    { name: "PostgreSQL / MongoDB", icon: Cpu },
    { name: "CI/CD Pipelines", icon: TrendingUp },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, conduct market research, and create a detailed development roadmap.",
      icon: "📋",
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Expert architects design scalable systems with optimal user experience and performance.",
      icon: "🎨",
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, testing, and quality assurance at every step.",
      icon: "⚙️",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance, monitoring, and 24/7 technical support.",
      icon: "🚀",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                  Application Development
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Application <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">Services</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Custom software solutions tailored to meet your specific business objectives using modern engineering principles and cutting-edge technologies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right SVG Illustration */}
            <div className="relative h-96 hidden md:block">
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background shapes */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                {/* Center device/screen */}
                <rect x="140" y="140" width="120" height="120" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                <rect x="150" y="150" width="100" height="80" rx="4" fill="#0F172A" />
                
                {/* Screen content */}
                <line x1="160" y1="160" x2="240" y2="160" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                <line x1="160" y1="175" x2="240" y2="175" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                <line x1="160" y1="190" x2="230" y2="190" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                <line x1="160" y1="205" x2="220" y2="205" stroke="#06B6D4" strokeWidth="2" opacity="0.7" />
                
                {/* Floating elements */}
                <circle cx="280" cy="100" r="12" fill="#3B82F6" opacity="0.8" />
                <circle cx="120" cy="120" r="10" fill="#06B6D4" opacity="0.8" />
                <circle cx="320" cy="300" r="14" fill="#0EA5E9" opacity="0.8" />
                <circle cx="80" cy="300" r="11" fill="#3B82F6" opacity="0.8" />
                
                {/* Connecting lines */}
                <line x1="200" y1="140" x2="280" y2="100" stroke="#3B82F6" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
                <line x1="200" y1="140" x2="120" y2="120" stroke="#06B6D4" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
                <line x1="200" y1="260" x2="320" y2="300" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
                <line x1="200" y1="260" x2="80" y2="300" stroke="#3B82F6" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Comprehensive development solutions for all your application needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 group-hover:from-blue-100/50 group-hover:to-cyan-100/50 dark:from-blue-900/0 dark:to-cyan-900/0 dark:group-hover:from-blue-900/20 dark:group-hover:to-cyan-900/20 transition-all duration-300" />
                <div className="relative z-10 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced Cards */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Proven expertise and commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100/20 dark:to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <BenefitIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Proven methodology for delivering excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 group-hover:from-blue-100/50 group-hover:to-cyan-100/50 dark:from-blue-900/0 dark:to-cyan-900/0 dark:group-hover:from-blue-900/20 dark:group-hover:to-cyan-900/20 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text mb-4">
                      {step.number}
                    </div>
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Latest tools and frameworks for optimal results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const TechIcon = tech.icon;
              const colors = [
                "from-blue-500/20 to-cyan-500/20",
                "from-purple-500/20 to-pink-500/20",
                "from-green-500/20 to-emerald-500/20",
                "from-yellow-500/20 to-orange-500/20",
                "from-orange-500/20 to-red-500/20",
                "from-indigo-500/20 to-purple-500/20",
              ];
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br ${colors[index]} border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TechIcon className="w-8 h-8 text-slate-900 dark:text-white" strokeWidth={1.5} />
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white text-lg">{tech.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-900 dark:via-blue-950 dark:to-cyan-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's discuss how our application services can help you achieve your business goals and stay ahead of the competition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-bold rounded-lg transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationServicesDetail;
