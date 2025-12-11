import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Users, CheckCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced React developer to lead our frontend development efforts and mentor junior developers.",
    responsibilities: [
      "Develop and maintain scalable React applications",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with designers and backend engineers",
      "Optimize application performance and user experience",
      "Participate in architectural decisions",
    ],
    requirements: [
      "5+ years of professional React development experience",
      "Strong TypeScript and JavaScript knowledge",
      "Experience with state management (Redux, Zustand, etc.)",
      "Knowledge of modern development tools and practices",
      "Excellent communication skills",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget",
      "Stock options",
      "Work-life balance",
    ],
  },
  {
    id: "2",
    title: "UI/UX Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our design team to create beautiful and intuitive user experiences for our diverse product portfolio.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with developers on implementation",
      "Maintain design consistency across products",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma or similar design tools",
      "Strong understanding of design principles",
      "Portfolio showcasing your best work",
      "Experience with user research methods",
      "Attention to detail and design aesthetics",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Flexible working hours",
      "Design tools and resources",
      "Career growth opportunities",
      "Collaborative team environment",
    ],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications using modern technologies. We're looking for passionate developers who enjoy working on challenging problems.",
    responsibilities: [
      "Develop full-stack web applications",
      "Build RESTful APIs and database schemas",
      "Implement frontend features using React",
      "Deploy and maintain applications",
      "Participate in agile development cycles",
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React and Node.js",
      "Knowledge of PostgreSQL/MongoDB",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Strong problem-solving skills",
      "Git and version control expertise",
    ],
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Remote-first culture",
      "Learning and development opportunities",
      "Flexible schedule",
      "Performance bonuses",
    ],
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4+ years",
    description: "Lead product strategy and development for one of our core products. Drive impact through data-driven decisions and user insights.",
    responsibilities: [
      "Define product vision and strategy",
      "Conduct market research and competitive analysis",
      "Manage product roadmap and prioritization",
      "Work with engineering and design teams",
      "Analyze product metrics and user feedback",
    ],
    requirements: [
      "4+ years of product management experience",
      "Track record of successful product launches",
      "Strong analytical and communication skills",
      "Experience with SaaS products",
      "Understanding of agile methodologies",
      "Data-driven decision making",
    ],
    benefits: [
      "Attractive salary package",
      "Health insurance",
      "Flexible working arrangement",
      "Professional development budget",
      "Quarterly bonuses",
      "Equity options",
    ],
  },
];

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  portfolio: string;
  message: string;
}

const Careers = () => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    position: selectedJobId
      ? jobOpenings.find((j) => j.id === selectedJobId)?.title || ""
      : "",
    experience: "",
    education: "",
    portfolio: "",
    message: "",
  });

  const selectedJob = jobOpenings.find((j) => j.id === selectedJobId);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleJobSelect = (jobId: string) => {
    setSelectedJobId(jobId);
    const job = jobOpenings.find((j) => j.id === jobId);
    if (job) {
      setFormData((prev) => ({
        ...prev,
        position: job.title,
      }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email body with form details
    const emailBody = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Position Applied: ${formData.position}

Years of Experience: ${formData.experience}
Education: ${formData.education}
Portfolio/Website: ${formData.portfolio}

Additional Message:
${formData.message}

---
Note: Please attach your resume/CV when sending this email.
    `.trim();

    // Create Gmail compose URL with pre-filled data
    const subject = `Job Application - ${formData.position}`;
    const recipientEmail = "mdineshraja03@gmail.com";

    // Gmail compose URL with pre-filled fields
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new window
    window.open(gmailLink, "_blank");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      education: "",
      portfolio: "",
      message: "",
    });
    setSelectedJobId(null);
  };

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
                <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 font-bold">
                  Careers
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
                Join Our <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                We're always looking for talented individuals who are passionate about innovation, creativity, and making an impact. Explore exciting career opportunities with us.
              </p>

              {/* Career Stats */}
              <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
                <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text mb-2">
                    {jobOpenings.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Open Positions</div>
                </div>
                <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text mb-2">
                    3
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Departments</div>
                </div>
                <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text mb-2">
                    2
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Join <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We believe in creating a workplace where talented individuals can thrive and make a real impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: "🚀",
                  title: "Innovation & Growth",
                  description: "Work on cutting-edge projects and technologies. We invest in your professional development and career growth.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Culture",
                  description: "Be part of a supportive team where your ideas are valued. We celebrate diversity and encourage creativity.",
                },
                {
                  icon: "⚖️",
                  title: "Work-Life Balance",
                  description: "Flexible working arrangements, competitive benefits, and a company that respects your personal time.",
                },
                {
                  icon: "💡",
                  title: "Challenging Problems",
                  description: "Solve complex problems that matter. Your work directly impacts thousands of users worldwide.",
                },
                {
                  icon: "🌍",
                  title: "Remote-Friendly",
                  description: "Work from anywhere in the world. We have a distributed team with flexible location options.",
                },
                {
                  icon: "💰",
                  title: "Competitive Benefits",
                  description: "Attractive salary, health insurance, bonuses, and equity options. We value our team members.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Open <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
                Click on any position to view details and apply
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Job Listings */}
                <div className="lg:col-span-1 space-y-4">
                  {jobOpenings.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => handleJobSelect(job.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                        selectedJobId === job.id
                          ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-500 dark:border-green-500 shadow-lg"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          selectedJobId === job.id
                            ? "bg-green-500"
                            : "bg-slate-100 dark:bg-slate-700"
                        }`}>
                          <Briefcase className={`w-5 h-5 ${
                            selectedJobId === job.id
                              ? "text-white"
                              : "text-slate-600 dark:text-slate-300"
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                            {job.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            {job.department}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                              {job.type}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Job Details and Application Form */}
                <div className="lg:col-span-2">
                  {selectedJobId && selectedJob ? (
                    <div className="sticky top-24">
                      <div className="space-y-8 max-h-[calc(100vh-200px)] overflow-y-auto">
                        {/* Job Details */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                              {selectedJob.title}
                            </h2>
                            <div className="flex flex-wrap gap-4 mb-6">
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <MapPin className="w-5 h-5" />
                                <span>{selectedJob.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <Clock className="w-5 h-5" />
                                <span>{selectedJob.type}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <Users className="w-5 h-5" />
                                <span>{selectedJob.experience}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                              About the Role
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              {selectedJob.description}
                            </p>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                              Responsibilities
                            </h3>
                            <ul className="space-y-2">
                              {selectedJob.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                              Requirements
                            </h3>
                            <ul className="space-y-2">
                              {selectedJob.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                              Benefits
                            </h3>
                            <ul className="space-y-2">
                              {selectedJob.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                  <DollarSign className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Application Form */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Apply Now
                          </h3>

                          <form onSubmit={handleSubmitApplication} className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleFormChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Your full name"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                  Email *
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleFormChange}
                                  required
                                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                  placeholder="your@email.com"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                  Phone Number *
                                </label>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleFormChange}
                                  required
                                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                  placeholder="+1 (555) 123-4567"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Years of Experience *
                              </label>
                              <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleFormChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="e.g., 5+ years"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Education *
                              </label>
                              <input
                                type="text"
                                name="education"
                                value={formData.education}
                                onChange={handleFormChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="e.g., Bachelor's in Computer Science"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Portfolio/Website
                              </label>
                              <input
                                type="url"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleFormChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="https://yourportfolio.com"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                Additional Message
                              </label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleFormChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                placeholder="Tell us about yourself and why you're interested in this position..."
                              />
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-blue-700 dark:text-blue-300">
                              ℹ️ After clicking submit, you'll be redirected to Gmail. Please attach your resume/CV and send the email.
                            </div>

                            <button
                              type="submit"
                              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 group"
                            >
                              <span>Submit Application</span>
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-96 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 text-center">
                      <div>
                        <Briefcase className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                          Select a position to view details and apply
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Hiring <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Simple and transparent steps to join our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Submit Application",
                  description: "Fill out the application form with your details and attach your resume",
                  icon: "📝",
                },
                {
                  number: "02",
                  title: "Initial Review",
                  description: "Our team reviews your application and qualifications",
                  icon: "👀",
                },
                {
                  number: "03",
                  title: "Interviews",
                  description: "Technical and cultural fit interviews with our team",
                  icon: "💬",
                },
                {
                  number: "04",
                  title: "Offer & Onboarding",
                  description: "Receive offer and join our amazing team!",
                  icon: "🎉",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text mb-4">
                      {step.number}
                    </div>
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-700 dark:border-slate-800">
              {/* Background elements */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Don't see a position that fits?
                </h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                  We're always looking for talented people. Reach out to us and let's discuss opportunities that might be perfect for you.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 group"
                >
                  <span>Get In Touch</span>
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

export default Careers;
