import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
                  About Us
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
                Where Innovation Meets Excellence
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                At Giglabs, we are driven by innovation and fueled by passion for technology. We specialize in crafting tailored solutions that meet the unique needs of our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Tabs */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                Our Core Foundation
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission Card */}
                <div className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      To deliver high quality and cost-effective software solutions that help companies and entrepreneurs achieve their goals.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Harnessing the power of technology</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Solving complex challenges</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      To envision a world where technology seamlessly integrates with everyday life, empowering growth.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Lead the forefront of innovation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Create a culture of collaboration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Values Card */}
                <div className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Values</h3>
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      Dedication to sustainability and social responsibility through ethical practices.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Customer-Centricity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Innovation & Integrity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                Why Choose Giglabs
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We combine expertise, innovation, and commitment to deliver transformative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Customer-Centric",
                  description: "We put our clients at the center of everything we do.",
                  color: "from-blue-500/20 to-cyan-500/20",
                  borderColor: "border-blue-200 dark:border-blue-800"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Driven",
                  description: "Focus on innovations that deliver real business value.",
                  color: "from-yellow-500/20 to-orange-500/20",
                  borderColor: "border-yellow-200 dark:border-yellow-800"
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Growth",
                  description: "Our culture ensures we stay ahead of industry trends.",
                  color: "from-green-500/20 to-emerald-500/20",
                  borderColor: "border-green-200 dark:border-green-800"
                },
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description: "Rigorous processes ensure reliable, secure solutions.",
                  color: "from-purple-500/20 to-pink-500/20",
                  borderColor: "border-purple-200 dark:border-purple-800"
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${item.color} border ${item.borderColor} hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                >
                  <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-current opacity-5 rounded-full" />
                  <div className="relative z-10">
                    <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section with Gradient */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "100+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <p className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Insight Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                  Our Commitment to Excellence
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Every project, every client, every solution - driven by our core values
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Expert Team",
                    description: "Our highly skilled developers, designers, and strategists bring decades of combined experience to every project.",
                  },
                  {
                    title: "Proven Track Record",
                    description: "We've successfully delivered transformative solutions across diverse industries and business sizes.",
                  },
                  {
                    title: "Client Partnerships",
                    description: "We view our clients as partners, collaborating closely to ensure exceptional outcomes.",
                  },
                  {
                    title: "Continuous Learning",
                    description: "We stay current with emerging technologies and best practices to provide cutting-edge solutions.",
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl p-8 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-purple-100/0 group-hover:from-blue-100/50 group-hover:to-purple-100/50 dark:from-blue-900/0 dark:to-purple-900/0 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-300" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
