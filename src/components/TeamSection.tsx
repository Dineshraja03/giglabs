import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Heart, Lightbulb } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Creative Director",
    image: "/placeholder.png",
    bio: "Visionary designer with 10+ years of experience in crafting exceptional digital experiences",
    expertise: ["UI/UX", "Strategy", "Branding"],
    gradient: "from-blue-500 to-cyan-500",
    lightGradient: "from-blue-100/50 to-cyan-100/50",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "/placeholder.png",
    bio: "Full-stack expert building scalable solutions with modern technologies and best practices",
    expertise: ["React", "Node.js", "Architecture"],
    gradient: "from-purple-500 to-pink-500",
    lightGradient: "from-purple-100/50 to-pink-100/50",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    name: "Mike Rodriguez",
    role: "Strategy Lead",
    image: "/placeholder.png",
    bio: "Strategic thinker driving business growth through data-driven insights and innovation",
    expertise: ["Strategy", "Analytics", "Growth"],
    gradient: "from-orange-500 to-amber-500",
    lightGradient: "from-orange-100/50 to-amber-100/50",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
              Our Team
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            Creative <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Minds</span> Delivering Excellence
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of designers, developers, and strategists united by the mission to create exceptional digital experiences that drive real impact
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card wrapper */}
              <div className={`relative flex flex-col h-full bg-gradient-to-br ${member.lightGradient} dark:from-slate-800 dark:to-slate-900 border ${member.borderColor}`}>
                {/* Team member image */}
                <div className="relative h-72 overflow-hidden bg-gray-200 dark:bg-slate-800">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Name and Role */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white`}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Profile CTA */}
                  <div className="flex items-center gap-2 mt-auto text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why We're <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our unique approach combines creativity, strategy, and technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovative Thinking",
                description: "We push boundaries and challenge conventions to deliver cutting-edge solutions that stand out",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Heart,
                title: "Passion Driven",
                description: "Every team member brings genuine passion and dedication to creating exceptional work",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Zap,
                title: "Results Focused",
                description: "We measure success by impact, continuously innovating to exceed expectations",
                gradient: "from-orange-500 to-amber-500",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Background decorative element */}
                  <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team CTA Section */}
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-700 dark:border-slate-800">
          {/* Background elements */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to work with our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">talented team</span>?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's connect and discuss how our team can transform your vision into reality
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
