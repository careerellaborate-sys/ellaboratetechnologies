import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Cpu, Car, Database, Code, FlaskConical, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | AI, IoT, ERP & Autonomous Systems Engineering",
  description:
    "Ellaborate Technologies offers AI/ML development, IoT hardware & firmware, autonomous vehicle engineering, SAP/Oracle ERP, custom software, R&D prototyping, and technology consulting.",
  alternates: { canonical: "https://ellaboratetechnologies.com/services" },
};

interface Service {
  id: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  value: string;
  iconColor: string;
}

const services: Service[] = [
  {
    id: "ai-ml",
    icon: Brain,
    tag: "Artificial Intelligence",
    title: "AI / ML Development",
    description:
      "We design, build, and deploy custom AI and machine learning systems tailored to your business problem — from edge inference to cloud-scale training pipelines.",
    deliverables: [
      "Custom ML model design, training, and optimization",
      "Computer vision systems (detection, segmentation, OCR)",
      "NLP pipelines: classification, summarization, entity extraction",
      "Predictive analytics and anomaly detection systems",
      "MLOps pipelines: CI/CD, model registry, monitoring",
      "Edge AI deployment on NVIDIA Jetson / Coral TPU",
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "FastAPI", "AWS SageMaker", "MLflow", "Docker"],
    value: "Reduce manual inspection costs, automate complex decisions, and build competitive AI-driven products with measurable ROI.",
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    id: "iot",
    icon: Cpu,
    tag: "Internet of Things",
    title: "IoT Hardware & Firmware",
    description:
      "Complete IoT product development from schematic design to cloud connectivity — including PCB, embedded firmware, RTOS integration, and industrial protocols.",
    deliverables: [
      "Custom PCB design, schematic, and layout (4-layer+)",
      "Embedded firmware in C/C++ for ARM Cortex-M",
      "FreeRTOS and Zephyr RTOS implementation",
      "Industrial protocol stack: Modbus, CAN, RS-485, OPC-UA",
      "Wireless: BLE 5.0, Wi-Fi, LoRaWAN, NB-IoT, LTE-M",
      "Cloud connectivity: AWS IoT Core, Azure IoT Hub",
      "OTA firmware update system",
      "Cloud dashboard and mobile app integration",
    ],
    tools: ["ESP32", "STM32", "nRF52", "Arduino", "FreeRTOS", "Zephyr", "MQTT", "AWS IoT", "Azure IoT", "KiCad"],
    value: "Bring hardware products from concept to production with a single engineering team that owns firmware, hardware, and cloud connectivity.",
    iconColor: "text-emerald-600 bg-emerald-50",
  },
  {
    id: "autonomous",
    icon: Car,
    tag: "Autonomous Systems",
    title: "Autonomous Vehicle Engineering",
    description:
      "We develop perception, planning, and control systems for autonomous mobile robots, AGVs, UAVs, and self-driving vehicle research platforms.",
    deliverables: [
      "Sensor fusion: LiDAR, camera, radar, IMU, GPS",
      "SLAM (Simultaneous Localization and Mapping) systems",
      "ROS 2 navigation stack integration (Nav2, MoveIt)",
      "Object detection and tracking with real-time inference",
      "Path planning and obstacle avoidance algorithms",
      "Vehicle control and dynamics simulation (Gazebo, CARLA)",
      "Hardware-in-the-loop (HIL) testing infrastructure",
    ],
    tools: ["ROS 2", "Python", "C++", "SLAM Toolbox", "Nav2", "Gazebo", "CARLA", "NVIDIA Jetson", "LiDAR (Velodyne/Ouster)", "OpenCV"],
    value: "Accelerate your robotics or autonomous vehicle R&D with a team that has shipped working systems — not just demos.",
    iconColor: "text-violet-600 bg-violet-50",
  },
  {
    id: "erp",
    icon: Database,
    tag: "Enterprise Resource Planning",
    title: "ERP Solutions (SAP + Oracle)",
    description:
      "Full-cycle ERP implementation, migration, and optimization covering SAP S/4HANA, SAP ECC, Oracle NetSuite, and Oracle Fusion Cloud.",
    deliverables: [
      "SAP S/4HANA greenfield and brownfield implementation",
      "SAP ECC to S/4HANA migration planning and execution",
      "Oracle NetSuite implementation and customization",
      "Custom ABAP / Oracle APEX development",
      "Data migration, cleansing, and validation",
      "Third-party integration (CRM, WMS, MES, BI tools)",
      "User training, change management, and go-live support",
      "Post-implementation AMS (Application Managed Services)",
    ],
    tools: ["SAP S/4HANA", "SAP ECC", "SAP BTP", "Oracle NetSuite", "Oracle Fusion", "ABAP", "Fiori", "SAP BW/BI", "Python"],
    value: "Streamline operations, eliminate data silos, and gain real-time business intelligence with a precisely executed ERP implementation.",
    iconColor: "text-amber-600 bg-amber-50",
  },
  {
    id: "software",
    icon: Code,
    tag: "Software Engineering",
    title: "Custom Software Development",
    description:
      "Scalable web applications, APIs, mobile platforms, and enterprise software built with modern architecture and engineering best practices.",
    deliverables: [
      "Web application development (React, Next.js, Vue)",
      "Backend API development (Node.js, FastAPI, Django)",
      "Mobile app development (React Native, Flutter)",
      "Microservices architecture and API gateway design",
      "Database design and optimization (PostgreSQL, MongoDB)",
      "Real-time systems with WebSockets and event streaming",
      "SaaS platform development from MVP to scale",
      "DevOps: CI/CD pipelines, containerization, IaC",
    ],
    tools: ["React", "Next.js", "Node.js", "FastAPI", "Django", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "Terraform"],
    value: "Ship reliable, scalable software products faster — with clean architecture that doesn't become technical debt in 12 months.",
    iconColor: "text-sky-600 bg-sky-50",
  },
  {
    id: "rd",
    icon: FlaskConical,
    tag: "Research & Development",
    title: "R&D & Prototyping",
    description:
      "Fast-cycle feasibility studies, technology scouting, and hardware/software prototype development to validate ideas before full investment.",
    deliverables: [
      "Technology feasibility assessment and report",
      "Proof of concept (PoC) hardware and software builds",
      "Rapid prototype development (2–8 weeks)",
      "Component and vendor selection reports",
      "Test and validation framework design",
      "Transition planning from prototype to production",
    ],
    tools: ["Python", "Arduino", "Raspberry Pi", "3D Printing", "Altium", "MATLAB/Simulink", "Jupyter", "LTSpice"],
    value: "De-risk your innovation investment with a structured prototyping process that produces working proof of concept before full commitment.",
    iconColor: "text-rose-600 bg-rose-50",
  },
  {
    id: "consulting",
    icon: BarChart3,
    tag: "Advisory Services",
    title: "Technology Consulting",
    description:
      "Strategic technology advisory for digital transformation, architecture design, technology selection, and innovation roadmap development.",
    deliverables: [
      "Digital transformation strategy and roadmap",
      "Technology architecture review and recommendations",
      "Vendor evaluation and selection support",
      "Build vs buy analysis and outsourcing strategy",
      "Engineering team structure and hiring advisory",
      "Technical due diligence for M&A and investments",
    ],
    tools: ["TOGAF", "AWS", "Azure", "SAP", "Lean", "Agile", "JIRA", "Confluence"],
    value: "Make better technology decisions faster — with advisors who have built and shipped the systems they recommend.",
    iconColor: "text-brand-blue bg-blue-50",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ellaborate Technologies Services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: { "@type": "Organization", name: "Ellaborate Technologies" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-brand-dark text-white pt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 block">Engineering Services</span>
            <h1 className="heading-xl mb-6">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Seven deep engineering disciplines under one roof. From embedded hardware to enterprise cloud — we deliver full-stack technology products.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeUp key={service.id} delay={i * 0.05}>
                  <div id={service.id} className="card-base p-8 lg:p-12 scroll-mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-5 mb-6">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${service.iconColor}`}>
                            <Icon size={26} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">{service.tag}</span>
                            <h2 className="heading-md text-brand-dark mt-1">{service.title}</h2>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

                        <h3 className="font-semibold text-brand-dark mb-4 text-sm uppercase tracking-wider">Deliverables</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5">
                              <CheckCircle2 size={15} className="text-brand-blue mt-0.5 shrink-0" />
                              <span className="text-sm text-gray-600">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 mb-5">
                          <h3 className="font-semibold text-brand-dark mb-4 text-sm">Tools & Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((t) => (
                              <span key={t} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                          <h3 className="font-semibold text-brand-blue mb-2 text-sm">Value Proposition</h3>
                          <p className="text-sm text-blue-700 leading-relaxed">{service.value}</p>
                        </div>

                        <Link href="/contact" className="btn-cta w-full mt-5 text-sm">
                          Discuss This Service <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
