"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const techStack = [
  { name: "Python", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "ROS 2", category: "Autonomous" },
  { name: "Arduino", category: "IoT" },
  { name: "Raspberry Pi", category: "IoT" },
  { name: "SAP S/4HANA", category: "ERP" },
  { name: "Oracle", category: "ERP" },
  { name: "React", category: "Software" },
  { name: "Node.js", category: "Software" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "OpenCV", category: "Vision" },
];

export default function TechStackSection() {
  return (
    <section className="section-padding bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
            Technology Expertise
          </span>
          <h2 className="heading-md text-brand-dark">
            Built with Industry-Leading Tools
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
          staggerDelay={0.05}
        >
          {techStack.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-brand-blue/20 hover:shadow-md transition-all duration-200 group h-full text-center">
                <span className="font-semibold text-sm text-brand-dark group-hover:text-brand-blue transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-400 mt-1">{tech.category}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
