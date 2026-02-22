"use client";

import Link from "next/link";
import { Brain, Cpu, Car, Database, Code, FlaskConical, BarChart3, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/motion";

const services = [
  {
    icon: Brain,
    title: "AI / ML Development",
    description: "Custom AI models, NLP pipelines, computer vision, and predictive analytics systems built for real-world deployment.",
    href: "/services#ai-ml",
    color: "from-blue-500/10 to-indigo-500/5 border-blue-100",
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    icon: Cpu,
    title: "IoT Hardware & Firmware",
    description: "End-to-end IoT product development — circuit design, embedded firmware, RTOS, cloud connectivity, and remote OTA.",
    href: "/services#iot",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-100",
    iconColor: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Car,
    title: "Autonomous Systems",
    description: "Autonomous vehicle perception stacks, SLAM navigation, sensor fusion, and embedded control system engineering.",
    href: "/services#autonomous",
    color: "from-violet-500/10 to-purple-500/5 border-violet-100",
    iconColor: "text-violet-600 bg-violet-50",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "SAP S/4HANA, Oracle NetSuite, and custom ERP implementations with deep integration expertise for enterprise operations.",
    href: "/services#erp",
    color: "from-amber-500/10 to-orange-500/5 border-amber-100",
    iconColor: "text-amber-600 bg-amber-50",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Scalable web applications, mobile platforms, microservices architecture, and API development with modern stacks.",
    href: "/services#software",
    color: "from-sky-500/10 to-blue-500/5 border-sky-100",
    iconColor: "text-sky-600 bg-sky-50",
  },
  {
    icon: FlaskConical,
    title: "R&D & Prototyping",
    description: "Rapid feasibility studies, technology validation, proof-of-concept builds, and hardware/software prototyping.",
    href: "/services#rd",
    color: "from-rose-500/10 to-pink-500/5 border-rose-100",
    iconColor: "text-rose-600 bg-rose-50",
  },
  {
    icon: BarChart3,
    title: "Technology Consulting",
    description: "Strategic technology roadmaps, architecture reviews, digital transformation consulting, and vendor selection.",
    href: "/services#consulting",
    color: "from-brand-blue/10 to-brand-navy/5 border-blue-100",
    iconColor: "text-brand-blue bg-blue-50",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3">
            What We Build
          </span>
          <h2 className="heading-lg text-brand-dark mb-4">
            Engineering Services Built for
            <span className="text-gradient"> Enterprise Scale</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From hardware to cloud — we cover the full technology stack with deep domain expertise across seven engineering disciplines.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerDelay={0.08}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <Link href={service.href}>
                  <div className={`card-base card-hover h-full p-6 bg-gradient-to-br ${service.color} group`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${service.iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-semibold text-brand-dark mb-2 text-base">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.3} className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
