import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Linkedin, Twitter, Mail, Award, Zap, Heart, Lightbulb, Users, Code, Palette, Brain } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  gradient: string;
  lightGradient: string;
  borderColor: string;
  experience: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Visionary designer with 10+ years of experience in crafting exceptional digital experiences. Passionate about user-centric design and innovation.",
    expertise: ["UI/UX Design", "Strategy", "Branding", "Figma", "Design Systems"],
    gradient: "from-blue-500 to-cyan-500",
    lightGradient: "from-blue-100/50 to-cyan-100/50",
    borderColor: "border-blue-200 dark:border-blue-800",
    experience: "10+ years",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Full-stack expert building scalable solutions with modern technologies. Specialist in React, Node.js, and cloud architecture.",
    expertise: ["React", "Node.js", "TypeScript", "AWS", "System Design"],
    gradient: "from-purple-500 to-pink-500",
    lightGradient: "from-purple-100/50 to-pink-100/50",
    borderColor: "border-purple-200 dark:border-purple-800",
    experience: "8+ years",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Strategic thinker driving business growth through data-driven insights. Expert in market analysis and business development.",
    expertise: ["Business Strategy", "Analytics", "Growth Hacking", "Market Research", "Leadership"],
    gradient: "from-orange-500 to-amber-500",
    lightGradient: "from-orange-100/50 to-amber-100/50",
    borderColor: "border-orange-200 dark:border-orange-800",
    experience: "12+ years",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: "4",
    name: "Emily Watson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Product visionary focused on delivering user-centric solutions. Expert in agile methodologies and cross-functional team leadership.",
    expertise: ["Product Management", "User Research", "Agile", "Data Analysis", "Roadmap Planning"],
    gradient: "from-green-500 to-emerald-500",
    lightGradient: "from-green-100/50 to-emerald-100/50",
    borderColor: "border-green-200 dark:border-green-800",
    experience: "7+ years",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: "5",
    name: "David Park",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Innovative engineer passionate about clean code and scalable architecture. Expertise in cloud infrastructure and DevOps.",
    expertise: ["Full Stack", "Docker", "Kubernetes", "CI/CD", "PostgreSQL"],
    gradient: "from-red-500 to-rose-500",
    lightGradient: "from-red-100/50 to-rose-100/50",
    borderColor: "border-red-200 dark:border-red-800",
    experience: "6+ years",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    id: "6",
    name: "Jessica Liu",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "User research specialist dedicated to understanding user needs and behaviors. Expert in qualitative and quantitative research methods.",
    expertise: ["User Research", "Usability Testing", "Wireframing", "User Journey Mapping", "Prototyping"],
    gradient: "from-indigo-500 to-blue-500",
    lightGradient: "from-indigo-100/50 to-blue-100/50",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    experience: "5+ years",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 pt-40 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 font-bold">
                  Our Team
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
                Meet Our <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Talented Team</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A passionate group of designers, developers, and strategists united by the mission to create exceptional digital experiences that drive real impact
              </p>

              {/* Team Stats */}
              <div className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto">
                <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text mb-2">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
                </div>
                <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-2">200+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</div>
                </div>
                <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text mb-2">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Combined</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-24 px-6 bg-white dark:bg-slate-950">
          <div className="container mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
                Our Core Team
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Meet the brilliant minds behind our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 animate-in fade-in slide-in-from-bottom-4"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Card wrapper */}
                  <div className={`relative flex flex-col h-full bg-gradient-to-br ${member.lightGradient} dark:from-slate-800 dark:to-slate-900 border ${member.borderColor}`}>
                    {/* Team member image */}
                    <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-slate-800">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Experience Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white backdrop-blur-sm`}>
                          {member.experience}
                        </span>
                      </div>
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

                      {/* Social Links */}
                      <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                        {member.socials?.linkedin && (
                          <a href={member.socials.linkedin} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group/social">
                            <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400 transition-colors" />
                          </a>
                        )}
                        {member.socials?.twitter && (
                          <a href={member.socials.twitter} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group/social">
                            <Twitter className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover/social:text-blue-600 dark:group-hover/social:text-blue-400 transition-colors" />
                          </a>
                        )}
                        {member.socials?.email && (
                          <a href={member.socials.email} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group/social">
                            <Mail className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover/social:text-orange-600 dark:group-hover/social:text-orange-400 transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Company <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Culture</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We believe in fostering an environment where creativity thrives, innovation is encouraged, and every voice is heard
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We encourage creative thinking and embrace new ideas that push boundaries",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Heart,
                  title: "Passion",
                  description: "Every team member brings genuine passion and dedication to their craft",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We work together as one team, combining diverse skills and perspectives",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Zap,
                  title: "Excellence",
                  description: "We're committed to delivering exceptional results in everything we do",
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
        </section>

        {/* Values Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                What We <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Stand For</span>
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 text-lg">
                Our core values guide every decision we make and every project we undertake
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                {
                  title: "User-First Mindset",
                  description: "We put users at the center of everything we do. Understanding their needs, pain points, and goals drives our design and development decisions.",
                  icon: "👥",
                },
                {
                  title: "Quality Over Quantity",
                  description: "We believe in delivering exceptional quality rather than chasing numbers. Every pixel, line of code, and interaction is carefully crafted.",
                  icon: "⭐",
                },
                {
                  title: "Continuous Learning",
                  description: "We stay updated with the latest trends, technologies, and best practices. Growth and learning are embedded in our culture.",
                  icon: "📚",
                },
                {
                  title: "Transparency & Trust",
                  description: "We communicate openly, set realistic expectations, and build long-term relationships based on trust and mutual respect.",
                  icon: "🤝",
                },
              ].map((value, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-700 dark:border-slate-800">
              {/* Background elements */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
              
              <div className="relative z-10 text-center">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Join Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Growing Team</span>
                </h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                  We're always looking for talented individuals who are passionate about creating exceptional digital experiences. Explore career opportunities and grow with us.
                </p>
                <button 
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group cursor-not-allowed"
                >
                  <span>View Open Positions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
