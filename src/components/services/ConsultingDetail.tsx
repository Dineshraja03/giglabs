import { MessageSquare, CheckCircle, Zap, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ConsultingDetail = () => {
  const features = [
    "Strategic business consulting",
    "Technology strategy and planning",
    "Digital transformation roadmap",
    "Change management consulting",
    "Competitive analysis and positioning",
    "Innovation and growth strategies",
    "Business process improvement",
    "Executive advisory services",
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "Develop winning strategies for expansion",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access industry-leading consultants",
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description: "Fast-track your transformation",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Navigate challenges confidently",
    },
  ];

  const methodologies = [
    "Strategic Planning",
    "Change Management",
    "Organizational Design",
    "Market Analysis",
    "Technology Roadmap",
    "Performance Optimization",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white">
                Consulting <span className="text-transparent bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text">Services</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
              Our Consulting Services offer strategic guidance and expertise to help organizations navigate complex challenges, drive innovation, and achieve their business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:gap-3"
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
            Our Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center mb-4">
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

      {/* Methodologies Section */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12 text-slate-900 dark:text-white">
            Our Methodologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-center font-semibold text-slate-900 dark:text-white"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-rose-600 to-red-600 rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl font-black mb-4">
              Ready to Drive Strategic Change?
            </h2>
            <p className="text-rose-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how our consulting services can help you achieve your strategic objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-rose-600 font-bold rounded-lg transition-all duration-300 hover:gap-3"
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

export default ConsultingDetail;
