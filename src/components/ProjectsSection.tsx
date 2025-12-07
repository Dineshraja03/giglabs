import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "macife",
    category: "Company website",
    bgColor: "bg-gradient-to-br from-blue-900 to-blue-700",
  },
  {
    title: "buddy",
    category: "branding/logo",
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
  },
  {
    title: "texture",
    category: "Digital/app",
    bgColor: "bg-gradient-to-br from-purple-200 to-pink-200",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between mb-16">
          {/* Decorative icons */}
          <div className="flex gap-6">
            <div className="w-16 h-16 border-2 border-background/30 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="w-16 h-16 border-2 border-accent rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16v16H4z" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-right">
            Some of our
            <br />
            <span className="italic">favorite projects.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`aspect-[4/5] rounded-lg overflow-hidden relative group cursor-pointer ${project.bgColor}`}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-xs text-background/60 mb-1">{project.category}</p>
                <h3 className="text-2xl font-serif italic text-background">{project.title}</h3>
                <p className="text-sm text-background/80 opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                  Learn more
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
          >
            ALL PROJECTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-background/60 max-w-md mt-12 text-sm leading-relaxed">
          We develop websites that form the foundation of ambitious digital strategies. With online marketing know 
          how, user-centric content, outstanding web design and high-performance new technologies.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
