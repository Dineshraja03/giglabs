import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink, Github, Dribbble, Award, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gradient: string;
  lightGradient: string;
  borderColor: string;
  stats: Record<string, string>;
  tags: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  year?: string;
  client?: string;
  links?: {
    live?: string;
    github?: string;
    case?: string;
  };
}

const projects: Project[] = [
  {
    id: "1",
    title: "macife",
    category: "Company website",
    description: "Modern website design with user-centric approach",
    longDescription: "A complete redesign and rebuild of an e-commerce platform featuring modern UI/UX, improved performance, and enhanced user engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=1200&h=600&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
    lightGradient: "from-blue-100/50 to-cyan-100/50",
    borderColor: "border-blue-200 dark:border-blue-800",
    stats: { traffic: "+150%", conversion: "+45%", performance: "98/100" },
    tags: ["React", "UI/UX", "Responsive", "Analytics"],
    challenge: "Increase conversion rates while improving user experience across all devices",
    solution: "Implemented modern design system, optimized checkout flow, and added personalization features",
    results: ["150% increase in organic traffic", "45% improvement in conversion rate", "98/100 Lighthouse score"],
    year: "2024",
    client: "Macife Inc.",
    links: {
      live: "#",
      github: "#",
      case: "#",
    },
  },
  {
    id: "2",
    title: "buddy",
    category: "Branding & Logo",
    description: "Complete brand identity and logo design system",
    longDescription: "Comprehensive brand identity project including logo design, color palette, typography guidelines, and brand guidelines documentation.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    gradient: "from-orange-500 to-amber-500",
    lightGradient: "from-orange-100/50 to-amber-100/50",
    borderColor: "border-orange-200 dark:border-orange-800",
    stats: { recognition: "Top 10", awards: "3 Awards", brands: "12+ Sub-brands" },
    tags: ["Branding", "Logo", "Design System", "Guidelines"],
    challenge: "Create a distinctive brand identity that resonates with tech-savvy millennials",
    solution: "Developed modern, scalable design system with flexibility for multiple brand extensions",
    results: ["Won 3 international design awards", "Recognized in top 10 emerging brands", "Successfully launched 12 sub-brands"],
    year: "2023",
    client: "Buddy Technologies",
    links: {
      github: "#",
      case: "#",
    },
  },
  {
    id: "3",
    title: "texture",
    category: "Digital App",
    description: "Mobile and web app design for digital ecosystem",
    longDescription: "Full-stack mobile and web application design with intuitive interface, smooth animations, and seamless data synchronization.",
    image: "https://images.unsplash.com/photo-1512941691920-25bda097a228?w=1200&h=600&fit=crop",
    gradient: "from-purple-500 to-pink-500",
    lightGradient: "from-purple-100/50 to-pink-100/50",
    borderColor: "border-purple-200 dark:border-purple-800",
    stats: { users: "50K+", rating: "4.8★", downloads: "500K+" },
    tags: ["Mobile", "App", "UX Design", "React Native"],
    challenge: "Build cross-platform app with native-like performance and beautiful UI",
    solution: "Implemented React Native with custom UI components and optimized performance",
    results: ["50K+ active users", "4.8-star app store rating", "500K+ downloads in first year"],
    year: "2023",
    client: "Texture Labs",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: "4",
    title: "nexus",
    category: "SaaS Platform",
    description: "Enterprise-grade SaaS platform for project management",
    longDescription: "Complex SaaS solution with real-time collaboration features, advanced analytics dashboard, and enterprise-level security.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    gradient: "from-green-500 to-emerald-500",
    lightGradient: "from-green-100/50 to-emerald-100/50",
    borderColor: "border-green-200 dark:border-green-800",
    stats: { users: "1000+", uptime: "99.99%", features: "50+" },
    tags: ["SaaS", "Web App", "Analytics", "Real-time"],
    challenge: "Deliver enterprise-grade platform with real-time collaboration at scale",
    solution: "Built with modern tech stack featuring WebSocket integration and optimized database",
    results: ["1000+ enterprise users", "99.99% uptime guarantee", "50+ features delivered"],
    year: "2024",
    client: "Nexus Technologies",
    links: {
      live: "#",
      case: "#",
    },
  },
  {
    id: "5",
    title: "luminox",
    category: "E-commerce Platform",
    description: "Full-featured e-commerce platform with advanced filtering and recommendations",
    longDescription: "Complete e-commerce solution featuring AI-powered product recommendations, advanced search, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1522869635100-ce1b8ca61d35?w=1200&h=600&fit=crop",
    gradient: "from-red-500 to-pink-500",
    lightGradient: "from-red-100/50 to-pink-100/50",
    borderColor: "border-red-200 dark:border-red-800",
    stats: { gmv: "$10M+", customers: "100K+", satisfaction: "98%" },
    tags: ["E-commerce", "AI", "Machine Learning", "Payment Integration"],
    challenge: "Build scalable e-commerce platform with personalization and AI recommendations",
    solution: "Implemented machine learning algorithms for product recommendations and optimized inventory management",
    results: ["$10M+ in GMV", "100K+ registered customers", "98% customer satisfaction"],
    year: "2023",
    client: "Luminox Retail",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: "6",
    title: "helix",
    category: "Design System",
    description: "Comprehensive design system and component library",
    longDescription: "Enterprise design system with 200+ components, comprehensive documentation, and automated testing suite.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    gradient: "from-indigo-500 to-purple-500",
    lightGradient: "from-indigo-100/50 to-purple-100/50",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    stats: { components: "200+", teams: "15+", coverage: "95%" },
    tags: ["Design System", "Components", "Documentation", "Testing"],
    challenge: "Create unified design system for 15 different product teams",
    solution: "Developed comprehensive design system with Storybook integration and automated testing",
    results: ["200+ reusable components", "Used by 15+ internal teams", "95% test coverage"],
    year: "2024",
    client: "Helix Inc.",
    links: {
      github: "#",
      case: "#",
    },
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Web Design", value: "website" },
  { name: "Branding", value: "branding" },
  { name: "Mobile App", value: "app" },
  { name: "SaaS", value: "saas" },
  { name: "E-commerce", value: "ecommerce" },
];

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 pt-40 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
                Showcasing Our Best <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Work</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Explore our collection of innovative projects that demonstrate our expertise in design, development, and digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="sticky top-20 z-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 animate-in fade-in slide-in-from-bottom-4"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
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

                      {/* Year Badge */}
                      {project.year && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-sm">
                            {project.year}
                          </span>
                        </div>
                      )}
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
                        {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
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
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Links */}
                      <div className="flex items-center gap-4 mt-auto">
                        <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300 group/link">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </button>
                        {project.links?.live && (
                          <a href={project.links.live} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                            <ExternalLink className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-24">
                <p className="text-xl text-slate-600 dark:text-slate-400">No projects found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Creative Process</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                A proven methodology that ensures exceptional results for every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery & Research",
                  description: "Deep dive into your business, market, and audience to uncover insights and opportunities",
                  icon: "🔍",
                },
                {
                  number: "02",
                  title: "Strategy & Planning",
                  description: "Develop comprehensive strategy aligned with your goals and target audience",
                  icon: "📋",
                },
                {
                  number: "03",
                  title: "Design & Development",
                  description: "Create stunning visuals and build robust solutions using latest technologies",
                  icon: "⚙️",
                },
                {
                  number: "04",
                  title: "Launch & Optimize",
                  description: "Deploy with confidence and continuously optimize based on real user data",
                  icon: "🚀",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text mb-4">
                      {step.number}
                    </div>
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-700 dark:border-slate-800">
              {/* Background elements */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
              
              <div className="relative z-10 text-center">
                <Award className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to start your next <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">project</span>?
                </h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                  Let's collaborate and create something extraordinary. Get in touch with our team today to discuss your vision and bring it to life.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;
