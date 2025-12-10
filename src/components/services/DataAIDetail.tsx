import { Brain, CheckCircle, Zap, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DataAIDetail = () => {
  const features = [
    "Machine learning model development",
    "Deep learning and neural networks",
    "Data analytics and visualization",
    "Artificial intelligence implementation",
    "Predictive analytics solutions",
    "Natural language processing",
    "Computer vision applications",
    "Business intelligence dashboards",
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate complex processes with AI",
    },
    {
      icon: Users,
      title: "Expert Analysis",
      description: "Deep expertise in AI and machine learning",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Data protection and privacy compliance",
    },
  ];

  const technologies = [
    "TensorFlow / PyTorch",
    "Python / R",
    "Scikit-learn",
    "Apache Spark",
    "Tableau / Power BI",
    "Cloud ML Services",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white">
                Data & <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">AI</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
              Unlock the full potential of your data with our advanced Data and AI services. Drive solutions for your most pressing problems with data-driven insights and AI-powered automation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 hover:gap-3"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12 text-slate-900 dark:text-white">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12 text-slate-900 dark:text-white">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <BenefitIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12 text-slate-900 dark:text-white">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-center font-semibold text-slate-900 dark:text-white"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl font-black mb-4">
              Ready to Harness the Power of Data & AI?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how our Data & AI services can drive your business forward.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-purple-600 font-bold rounded-lg transition-all duration-300 hover:gap-3"
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

export default DataAIDetail;
