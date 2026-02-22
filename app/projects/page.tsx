import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Wrench, Target, Lightbulb } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Ellaborate Technologies",
  description:
    "Explore Ellaborate Technologies' project case studies in AI, IoT, autonomous systems, and ERP — real problems, real solutions, measurable impact.",
  alternates: { canonical: "https://ellaboratetechnologies.com/projects" },
};

const projects = [
  {
    id: "quality-inspection",
    tag: "AI / Computer Vision",
    tagColor: "bg-blue-50 text-blue-700",
    title: "AI-Powered Quality Inspection System",
    client: "Auto Manufacturing Company, Pune",
    problem: "A high-volume automotive parts manufacturer was performing defect inspection manually on 10,000+ units per day. False rejection rates were at 8%, and defect escape rate caused recalls. The process was unsustainable as volume scaled.",
    solution: "We built a real-time computer vision inspection system using custom-trained YOLOv8 models deployed on NVIDIA Jetson AGX Orin edge devices. The system integrated with existing conveyor lines via PLC communication, running at 120 frames/second with sub-100ms latency.",
    tech: ["PyTorch", "YOLOv8", "NVIDIA Jetson AGX Orin", "OpenCV", "FastAPI", "AWS S3", "PostgreSQL", "PLC Modbus"],
    impact: ["34% reduction in defect escape rate", "60% faster inspection throughput", "8% → 0.4% false rejection rate", "ROI achieved in 7 months"],
    outcome: "The system now processes 15,000+ units/day with 99.2% classification accuracy, enabling the client to scale production without adding inspection headcount.",
  },
  {
    id: "iot-monitoring",
    tag: "IoT",
    tagColor: "bg-emerald-50 text-emerald-700",
    title: "Industrial IoT Remote Monitoring Platform",
    client: "Infrastructure Asset Management Firm, Mumbai",
    problem: "An asset management company had 50+ geographically distributed industrial equipment sites with no real-time visibility into equipment health, temperature, vibration, or power consumption — leading to reactive maintenance and unplanned downtime costing millions annually.",
    solution: "We designed custom IoT gateway hardware with multi-sensor inputs (vibration, temperature, current, voltage) using STM32-based PCBs with 4G LTE connectivity. Firmware ran on FreeRTOS with MQTT over TLS. Cloud backend was Azure IoT Hub with stream analytics, time-series DB, and alerting dashboard.",
    tech: ["STM32F4", "FreeRTOS", "LTE-M", "MQTT", "Azure IoT Hub", "TimescaleDB", "React", "Grafana", "Python"],
    impact: ["99.9% sensor uptime achieved", "40% reduction in unplanned downtime", "Predictive maintenance alerts with 85% accuracy", "Centralized visibility across all 50+ sites"],
    outcome: "The platform became a core operational tool, and the client licensed it to three additional subsidiaries within 18 months of deployment.",
  },
  {
    id: "warehouse-robot",
    tag: "Autonomous Systems",
    tagColor: "bg-violet-50 text-violet-700",
    title: "Autonomous Warehouse Navigation Robot",
    client: "E-commerce Logistics Company, Hyderabad",
    problem: "A fast-growing e-commerce logistics operator was struggling with throughput in their 20,000 sqm warehouse. Manual forklift operations caused 3 safety incidents per year and a bottleneck at peak demand that cost ₹2Cr+ per quarter in delayed shipments.",
    solution: "We developed an autonomous mobile robot (AMR) platform using ROS 2, equipped with 360° LiDAR SLAM navigation, camera-based pallet detection, and a fleet management system. We built the navigation stack including custom Nav2 configuration, multi-robot coordination, and a warehouse management integration API.",
    tech: ["ROS 2", "Python", "C++", "Velodyne LiDAR", "SLAM Toolbox", "Nav2", "Docker", "PostgreSQL", "React", "REST API"],
    impact: ["3x throughput increase at peak", "Zero safety incidents post-deployment", "85% reduction in manual forklift hours", "Fleet of 12 robots deployed in Phase 1"],
    outcome: "The client expanded from 12 to 30 robots in Phase 2, and the platform is now being licensed to their logistics partners across 3 cities.",
  },
  {
    id: "sap-migration",
    tag: "ERP / SAP",
    tagColor: "bg-amber-50 text-amber-700",
    title: "SAP S/4HANA Migration for Retail Conglomerate",
    client: "Retail Conglomerate, Chennai",
    problem: "A ₹800Cr retail group was running fragmented legacy ERP systems across 6 business units, leading to delayed month-end closes, inventory inaccuracy, and inability to generate consolidated financial reports. The CTO mandate was full S/4HANA migration in 14 months.",
    solution: "We executed a brownfield migration from SAP ECC 6.0 to S/4HANA 2023, covering FI/CO, MM, SD, and WM modules across 6 entities. We built custom ABAP enhancements for India GST compliance, a custom Fiori dashboard for store managers, and integrated NetSuite for one subsidiary using SAP BTP middleware.",
    tech: ["SAP S/4HANA 2023", "SAP ECC 6.0", "ABAP", "SAP Fiori", "SAP BTP", "SAP BW", "Oracle NetSuite", "Python"],
    impact: ["Month-end close reduced from 15 days to 4 days", "Inventory accuracy improved from 78% to 97%", "Real-time consolidated P&L across all entities", "14-month delivery — on time and on budget"],
    outcome: "The client achieved full digital visibility across all business units, enabling data-driven decisions that contributed to 12% margin improvement in Year 1.",
  },
  {
    id: "telemedicine",
    tag: "Software Engineering",
    tagColor: "bg-sky-50 text-sky-700",
    title: "Telemedicine Platform for Hospital Network",
    client: "Healthcare Network, Bangalore",
    problem: "A 12-hospital network needed a telemedicine platform supporting 500+ concurrent consultations with EMR integration, video calling, prescription management, and ABDM health ID compliance — in 6 months.",
    solution: "We built a full-stack telemedicine platform: React web app, React Native mobile apps (iOS/Android), Node.js backend with microservices, WebRTC-based video consultation, PostgreSQL + Redis, and FHIR-compliant API integration with existing HIS. Hosted on AWS with auto-scaling.",
    tech: ["React", "React Native", "Node.js", "WebRTC", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "FHIR API"],
    impact: ["500+ concurrent consultations supported", "ABDM & HIPAA compliance achieved", "4.7/5 doctor and patient satisfaction score", "30% reduction in no-show rates via automated reminders"],
    outcome: "The platform served 200,000+ consultations in its first year of operation, and the client extended our team for Phase 2 expansion.",
  },
  {
    id: "ev-battery-bms",
    tag: "IoT / Hardware",
    tagColor: "bg-rose-50 text-rose-700",
    title: "EV Battery Management System (BMS)",
    client: "Electric Vehicle Startup, Pune",
    problem: "An EV two-wheeler startup was using off-the-shelf BMS modules that lacked the granularity, safety features, and communication stack needed for their 48V/72Ah lithium pack — causing thermal events and poor range estimation.",
    solution: "We designed a custom 16S BMS PCBA from scratch: cell-level voltage and temperature monitoring, active balancing, protection circuitry (overcurrent, overvoltage, short circuit, thermal), CAN bus interface, and a cloud-connected telematics module for SOC/SOH reporting and OTA updates.",
    tech: ["STM32G0", "Texas Instruments BQ series", "CAN Bus", "FreeRTOS", "KiCad", "Python", "AWS IoT", "MATLAB"],
    impact: ["Thermal incidents reduced to zero", "SOC estimation accuracy: ±2%", "15% range improvement via optimized cell balancing", "IEC 62133 certification achieved"],
    outcome: "The BMS is now production-deployed in their Series A product line, and we are co-developing the BMS for their 96V commercial vehicle variant.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 block">Case Studies</span>
            <h1 className="heading-xl mb-6">
              Projects That <span className="text-gradient">Delivered Results</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Real engineering challenges, real solutions, measurable impact. Explore how we&apos;ve delivered across AI, IoT, autonomous systems, ERP, and software.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {projects.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.05}>
                <div id={project.id} className="card-base p-8 lg:p-12 scroll-mt-24">
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <h2 className="heading-md text-brand-dark mb-1">{project.title}</h2>
                    <p className="text-sm text-gray-400 font-medium">{project.client}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target size={16} className="text-red-500" />
                        <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider">The Problem</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb size={16} className="text-amber-500" />
                        <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider">Our Solution</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench size={16} className="text-brand-blue" />
                        <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider">Technology Used</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={16} className="text-emerald-500" />
                        <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider">Impact</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {project.impact.map((imp) => (
                          <li key={imp} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-wider mb-3">Project Outcome</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{project.outcome}</p>
                  </div>

                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all">
                      Discuss a Similar Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
