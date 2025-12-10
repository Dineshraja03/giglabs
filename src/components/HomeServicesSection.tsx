import { Code, Brain, Cloud, Cog, Building2, Lightbulb, Zap, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Application Services",
      description: "By leveraging modern software engineering principles, deep industry expertise and strategic partnership networks, we help our clients do more and think big",
      icon: Code,
      image: "/placeholder.png",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-100/50 to-cyan-100/50",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "02",
      title: "Data and AI",
      description: "We partner with our clients to drive solutions for their most pressing problems, no matter where you are on your data and AI journey, we'll meet you there",
      icon: Brain,
      image: "/placeholder.png",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-100/50 to-pink-100/50",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      id: "03",
      title: "Cloud Services",
      description: "We help you in finding the right balance of public, private or hybrid cloud that benefits your business the most.",
      icon: Cloud,
      image: "/placeholder.png",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-100/50 to-red-100/50",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
      id: "04",
      title: "Business Process Services",
      description: "Harness the exciting potential of new technologies, data and human ingenuity, so as to unlock value or shape change in the operating systems of large enterprises.",
      icon: Cog,
      image: "/placeholder.png",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-100/50 to-emerald-100/50",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      id: "05",
      title: "Enterprise Solutions",
      description: "We assists clients in designing modern business framework to maximize the value for clients in every aspect to improve efficiency and increase productivity.",
      icon: Building2,
      image: "/placeholder.png",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-100/50 to-purple-100/50",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
      id: "06",
      title: "Consulting",
      description: "Experience that propels you forward. You can reimagine your organization and take cloud-based transformation to the next level.",
      icon: Lightbulb,
      image: "/placeholder.png",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-100/50 to-rose-100/50",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    {
      id: "07",
      title: "Full Stack Development",
      description: "End-to-end development solutions from frontend to backend, creating robust and scalable applications that drive your business forward.",
      icon: Zap,
      image: "/placeholder.png",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-100/50 to-amber-100/50",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
      id: "08",
      title: "UI/UX Designing",
      description: "Create beautiful and intuitive user experiences that captivate your audience and drive engagement with thoughtful, user-centric design.",
      icon: Palette,
      image: "/placeholder.png",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-100/50 to-pink-100/50",
      borderColor: "border-red-200 dark:border-red-800",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Partner with us to leverage the power of technology and unlock new opportunities for growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to="/services"
                className="group relative flex flex-col h-full overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4"
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className={`relative flex flex-col flex-1 bg-gradient-to-br ${service.bgColor} dark:from-slate-800 dark:to-slate-900 border ${service.borderColor} p-8`}>
                  {/* Icon Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-4 text-center">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center text-sm mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex justify-center mt-auto">
                    <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
