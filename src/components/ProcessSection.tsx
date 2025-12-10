import { Lightbulb, Search, Palette, Brush, Code, ArrowRight } from "lucide-react";

const processes = [
  {
    id: "01",
    title: "Ideation",
    icon: Lightbulb,
    description: "We brainstorm and explore creative possibilities to find the perfect solution for your brand.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-100/50 to-cyan-100/50",
    darkBgColor: "dark:from-blue-900/20 dark:to-cyan-900/20",
    borderColor: "border-blue-300 dark:border-blue-700",
    accentColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "02",
    title: "Discovery",
    icon: Search,
    description: "Deep dive into understanding your business, users, and market to inform our strategy.",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-100/50 to-pink-100/50",
    darkBgColor: "dark:from-purple-900/20 dark:to-pink-900/20",
    borderColor: "border-purple-300 dark:border-purple-700",
    accentColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "03",
    title: "UX Design",
    icon: Palette,
    description: "Designing intuitive user experiences that make your product more meaningful, memorable, and engaging for your users.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-100/50 to-red-100/50",
    darkBgColor: "dark:from-orange-900/20 dark:to-red-900/20",
    borderColor: "border-orange-300 dark:border-orange-700",
    accentColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "04",
    title: "UI Design",
    icon: Brush,
    description: "Creating beautiful, pixel-perfect interfaces that bring your brand to life and delight your users.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-100/50 to-emerald-100/50",
    darkBgColor: "dark:from-green-900/20 dark:to-emerald-900/20",
    borderColor: "border-green-300 dark:border-green-700",
    accentColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "05",
    title: "Development",
    icon: Code,
    description: "Building robust, scalable solutions using cutting-edge technologies and best practices.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-100/50 to-blue-100/50",
    darkBgColor: "dark:from-indigo-900/20 dark:to-blue-900/20",
    borderColor: "border-indigo-300 dark:border-indigo-700",
    accentColor: "text-indigo-600 dark:text-indigo-400",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
              Our Methodology
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            What's the <span className="italic text-blue-600 dark:text-blue-400">process?</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step approach to delivering exceptional digital solutions that drive real results for your business.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          {/* Timeline visualization */}
          <div className="relative">
            {/* Horizontal connector line - positioned below cards */}
            <div className="absolute top-32 left-12 right-12 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 dark:from-blue-700 dark:via-purple-700 dark:to-indigo-700 rounded-full pointer-events-none z-0" />
            
            {/* Process Cards Grid */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {processes.map((process, index) => {
                const Icon = process.icon;
                return (
                  <div key={process.id} className="relative group">
                    {/* Card */}
                    <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-4 h-full bg-white dark:bg-slate-900`}>
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${process.bgColor} ${process.darkBgColor} border ${process.borderColor} transition-all duration-300 group-hover:border-opacity-100`} />
                      
                      {/* Content container */}
                      <div className="relative z-10 p-8 flex flex-col h-full">
                        {/* Step indicator */}
                        <div className="mb-6 flex items-start justify-between">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${process.color} text-white font-bold shadow-md group-hover:scale-110 transition-transform duration-300`}>
                            {process.id}
                          </div>
                          {/* Arrow connector */}
                          {index < processes.length - 1 && (
                            <div className="absolute -right-7 top-12 hidden lg:block z-20">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${process.accentColor} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Icon */}
                        <div className="mb-6">
                          <Icon className={`w-8 h-8 ${process.accentColor} group-hover:scale-125 transition-transform duration-300`} strokeWidth={1.5} />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                          {process.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-grow">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Process Flow - Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative space-y-8">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 dark:from-blue-700 dark:via-purple-700 dark:to-indigo-700" />

            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={process.id} className="relative pl-20 group">
                  {/* Circle indicator on timeline */}
                  <div className="absolute -left-3 top-4 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {process.id}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-x-2`}>
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${process.bgColor} ${process.darkBgColor} border ${process.borderColor}`} />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8">
                      {/* Icon */}
                      <div className="mb-4">
                        <Icon className={`w-7 h-7 ${process.accentColor}`} strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                        {process.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
