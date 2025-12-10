import { Link } from "react-router-dom";
import { ArrowRight, Zap, ExternalLink, Award } from "lucide-react";

const projects = [
  {
    title: "macife",
    category: "Company website",
    description: "Modern website design with user-centric approach",
    image: "/placeholder.png",
    gradient: "from-blue-500 to-cyan-500",
    lightGradient: "from-blue-100/50 to-cyan-100/50",
    borderColor: "border-blue-200 dark:border-blue-800",
    stats: { traffic: "+150%", conversion: "+45%" },
    tags: ["React", "UI/UX", "Responsive"],
  },
  {
    title: "buddy",
    category: "Branding & Logo",
    description: "Complete brand identity and logo design system",
    image: "/placeholder.png",
    gradient: "from-orange-500 to-amber-500",
    lightGradient: "from-orange-100/50 to-amber-100/50",
    borderColor: "border-orange-200 dark:border-orange-800",
    stats: { recognition: "Top 10", awards: "3 Awards" },
    tags: ["Branding", "Logo", "Design System"],
  },
  {
    title: "texture",
    category: "Digital App",
    description: "Mobile and web app design for digital ecosystem",
    image: "/placeholder.png",
    gradient: "from-purple-500 to-pink-500",
    lightGradient: "from-purple-100/50 to-pink-100/50",
    borderColor: "border-purple-200 dark:border-purple-800",
    stats: { users: "50K+", rating: "4.8★" },
    tags: ["Mobile", "App", "UX Design"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            Our Latest <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Explore our recent work showcasing innovative design and development solutions that drive real results for ambitious brands
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card wrapper */}
              <div className={`relative h-full flex flex-col bg-gradient-to-br ${project.lightGradient} dark:from-slate-800 dark:to-slate-900 border ${project.borderColor}`}>
                {/* Project image */}
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-slate-800">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-sm">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 mt-auto text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-700 dark:border-slate-800">
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-6 mx-auto">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to create something <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">extraordinary</span>?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate to bring your vision to life. View all our projects and discover how we can transform your ideas into impactful digital solutions.
            </p>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 group"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
