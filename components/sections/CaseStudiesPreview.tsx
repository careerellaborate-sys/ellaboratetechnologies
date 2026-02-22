import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const caseStudies = [
  {
    tag: "AI / Computer Vision",
    title: "AI-Powered Quality Inspection System",
    problem: "Manual defect detection on 10K+ units/day causing high error rates",
    impact: "34% reduction in defects, 60% faster inspection",
    tech: ["PyTorch", "OpenCV", "NVIDIA Jetson", "AWS"],
    href: "/projects#quality-inspection",
  },
  {
    tag: "IoT",
    title: "Industrial IoT Remote Monitoring Platform",
    problem: "No real-time visibility into distributed asset health across 50+ sites",
    impact: "99.9% uptime monitoring, 40% reduction in unplanned downtime",
    tech: ["ESP32", "FreeRTOS", "MQTT", "Azure IoT"],
    href: "/projects#iot-monitoring",
  },
  {
    tag: "Autonomous Systems",
    title: "Autonomous Warehouse Navigation Robot",
    problem: "Manual forklift operations causing injuries and throughput bottlenecks",
    impact: "3x throughput increase, zero safety incidents",
    tech: ["ROS 2", "LiDAR SLAM", "Python", "ROS Nav2"],
    href: "/projects#warehouse-robot",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14">
          <div>
            <span className="text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3 block">
              Case Studies
            </span>
            <h2 className="heading-lg text-brand-dark">
              Real Results for Real Clients
            </h2>
          </div>
          <Link href="/projects" className="btn-secondary mt-6 sm:mt-0 text-sm">
            All Projects <ArrowRight size={14} />
          </Link>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.title}>
              <Link href={cs.href}>
                <div className="card-base card-hover p-7 h-full group">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold mb-4">
                    {cs.tag}
                  </span>
                  <h3 className="font-bold text-brand-dark text-lg mb-3 leading-tight">{cs.title}</h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">{cs.problem}</p>

                  <div className="flex items-start gap-2 mb-5 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <TrendingUp size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-emerald-700">{cs.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cs.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                    View Case Study <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
