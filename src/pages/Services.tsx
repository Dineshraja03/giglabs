import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Brain, Cloud, Settings, Building2, MessageSquare, Zap, Palette, ArrowRight } from "lucide-react";
import ApplicationServicesDetail from "@/components/services/ApplicationServicesDetail";
import DataAIDetail from "@/components/services/DataAIDetail";
import CloudServicesDetail from "@/components/services/CloudServicesDetail";
import BusinessProcessDetail from "@/components/services/BusinessProcessDetail";
import EnterpriseDetail from "@/components/services/EnterpriseDetail";
import ConsultingDetail from "@/components/services/ConsultingDetail";
import ApplicationServicesImg from "@/assets/services/application services.png";
import DataImg from "@/assets/services/data.png";
import CloudImg from "@/assets/services/cloud services.png";
import BusinessProcessImg from "@/assets/services/Business Process Services.png";
import EnterpriseImg from "@/assets/services/Enterprise Solutions.png";
import ConsultingImg from "@/assets/services/consulting services.png";
import FullStackImg from "@/assets/services/fullstack.png";
import UIUXImg from "@/assets/services/uiux.webp";

const servicesList = [
  {
    id: "application",
    icon: Code,
    title: "Application Services",
    description: "By leveraging modern software engineering principles, deep industry expertise and strategic partnership networks, we help our clients do more and think big",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-100/50 to-cyan-100/50",
    borderColor: "border-blue-200 dark:border-blue-800",
    image: ApplicationServicesImg,
    component: ApplicationServicesDetail,
  },
  {
    id: "dataai",
    icon: Brain,
    title: "Data & AI",
    description: "We partner with our clients to drive solutions for their most pressing problems, no matter where you are on your data and AI journey, we'll meet you there",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-100/50 to-pink-100/50",
    borderColor: "border-purple-200 dark:border-purple-800",
    image: DataImg,
    component: DataAIDetail,
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Services",
    description: "We help you in finding the right balance of public, private or hybrid cloud that benefits your business the most.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-100/50 to-red-100/50",
    borderColor: "border-orange-200 dark:border-orange-800",
    image: CloudImg,
    component: CloudServicesDetail,
  },
  {
    id: "business",
    icon: Settings,
    title: "Business Process Services",
    description: "Harness the exciting potential of new technologies, data and human ingenuity, so as to unlock value or shape change in the operating systems of large enterprises.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-100/50 to-emerald-100/50",
    borderColor: "border-green-200 dark:border-green-800",
    image: BusinessProcessImg,
    component: BusinessProcessDetail,
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Solutions",
    description: "We assists clients in designing modern business framework to maximize the value for clients in every aspect to improve efficiency and increase productivity.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-100/50 to-purple-100/50",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    image: EnterpriseImg,
    component: EnterpriseDetail,
  },
  {
    id: "consulting",
    icon: MessageSquare,
    title: "Consulting Services",
    description: "Experience that propels you forward. You can reimagine your organization and take cloud-based transformation to the next level.",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-100/50 to-rose-100/50",
    borderColor: "border-pink-200 dark:border-pink-800",
    image: ConsultingImg,
    component: ConsultingDetail,
  },
  {
    id: "fullstack",
    icon: Zap,
    title: "Full Stack Development",
    description: "End-to-end development solutions from frontend to backend, creating robust and scalable applications that drive your business forward.",
    color: "from-yellow-500 to-amber-500",
    bgColor: "from-yellow-100/50 to-amber-100/50",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    image: FullStackImg,
    component: ConsultingDetail,
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Designing",
    description: "Create beautiful and intuitive user experiences that captivate your audience and drive engagement with thoughtful, user-centric design.",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-100/50 to-pink-100/50",
    borderColor: "border-red-200 dark:border-red-800",
    image: UIUXImg,
    component: ConsultingDetail,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const selectedServiceData = selectedService
    ? servicesList.find((s) => s.id === selectedService)
    : null;

  const SelectedComponent = selectedServiceData?.component;

  if (selectedService && SelectedComponent) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <div className="container mx-auto px-6 py-8">
            <button
              onClick={() => setSelectedService(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </button>
          </div>
          <SelectedComponent />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Explore our comprehensive range of digital solutions and services designed to transform your business
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className="group relative flex flex-col h-full overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 text-left"
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
                          <ServiceIcon className="w-6 h-6" strokeWidth={2} />
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
                          Explore Service
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
