import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Ellaborate Technologies",
  description:
    "Learn about Ellaborate Technologies — our mission, vision, company story, leadership, and why enterprises choose us for AI, IoT, and autonomous systems engineering.",
  alternates: { canonical: "https://ellaboratetechnologies.com/about" },
};

const values = [
  { title: "Engineering Precision", desc: "Every line of code and circuit trace is built to specification with zero compromise on quality." },
  { title: "Rapid Delivery", desc: "Aggressive timelines without technical debt — our agile methodology ships real value every sprint." },
  { title: "Client Partnership", desc: "We work as an extension of your engineering team, not just an outsourced vendor." },
  { title: "Scalable Architecture", desc: "Systems designed to scale from prototype to production without refactoring from scratch." },
];

const achievements = [
  "ISO 9001:2015 Quality Management Certified",
  "Microsoft Azure Advanced Specialization Partner",
  "SAP Gold Partner Implementation Firm",
  "NASSCOM Registered Technology Company",
  "50+ Successfully Delivered Enterprise Projects",
  "Recognized in Top 20 AI Startups India 2024",
];

const team = [
  { name: "Arjun Ellaborate", title: "CEO & Co-Founder", bio: "15+ years in embedded systems and AI product engineering." },
  { name: "Sneha Reddy", title: "CTO", bio: "Former ML Research Lead at IIT Hyderabad, specialized in computer vision." },
  { name: "Vikram Shah", title: "Head of IoT", bio: "Hardware engineer with 12 years designing industrial-grade embedded platforms." },
  { name: "Ananya Patel", title: "Head of ERP", bio: "SAP-certified consultant with 50+ enterprise implementation projects." },
];

const reasons = [
  "Full-stack capability — hardware, firmware, cloud, and software in-house",
  "Senior engineers on every project — no offshore junior delegation",
  "Proven delivery across AI, IoT, ERP, and autonomous systems",
  "Flexible engagement: fixed-scope or T&M with transparent billing",
  "Post-delivery support, training, and managed services available",
  "Domain experience in manufacturing, logistics, healthcare, and retail",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 block">About Us</span>
            <h1 className="heading-xl mb-6">
              Engineering Intelligent Systems Since <span className="text-gradient">2017</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a precision engineering firm specializing in AI, IoT, autonomous technologies, and enterprise software. Built by engineers, for engineers — with an uncompromising focus on delivery.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <FadeUp>
              <div className="card-base p-10 h-full border-t-4 border-t-brand-blue">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Target size={22} className="text-brand-blue" />
                </div>
                <h2 className="heading-md text-brand-dark mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To accelerate the development of intelligent, connected, and autonomous systems that solve real-world industrial and enterprise challenges — making advanced engineering accessible to businesses at every scale.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="card-base p-10 h-full border-t-4 border-t-brand-navy">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-brand-navy" />
                </div>
                <h2 className="heading-md text-brand-dark mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted deep-tech engineering partner in Asia Pacific — known for precision, reliability, and the ability to deliver complex AI and hardware systems that others cannot.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeUp className="text-center mb-12">
            <h2 className="heading-lg text-brand-dark">Our Story</h2>
          </FadeUp>
          <FadeUp delay={0.1} className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-5">
              Ellaborate Technologies was founded in 2017 by a team of engineers who saw a gap in the market: enterprises needed deep-tech capability — AI, IoT, autonomous systems — but were forced to stitch together multiple vendors, none of whom truly understood the full stack from hardware to cloud.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Starting with embedded systems and IoT product development, we rapidly expanded into AI/ML, autonomous vehicle engineering, and ERP implementation. By 2020, we had delivered intelligent systems across manufacturing, logistics, healthcare, and smart infrastructure.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Ellaborate operates as a full-stack engineering firm with 80+ engineers, serving clients across India, Southeast Asia, and the Middle East. Our projects run the gamut from rapid prototypes to multi-year enterprise transformation programs.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="heading-lg text-brand-dark">What Drives Us</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-base p-6 h-full text-center">
                  <h3 className="font-bold text-brand-dark mb-3">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3 block">Leadership</span>
            <h2 className="heading-lg text-brand-dark">The Team Behind the Engineering</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card-base card-hover p-7 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-navy/20 flex items-center justify-center mx-auto mb-4">
                    <Users size={26} className="text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-1">{member.name}</h3>
                  <p className="text-xs font-medium text-brand-blue mb-3 uppercase tracking-wider">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-3 block">Recognition</span>
            <h2 className="heading-lg">Certifications &amp; Achievements</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {achievements.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/5">
                  <Award size={18} className="text-brand-blue mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-xs font-semibold text-brand-blue tracking-widest uppercase mb-4 block">Why Ellaborate</span>
              <h2 className="heading-lg text-brand-dark mb-6">
                Why Clients Choose <br />Ellaborate Technologies
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We are not a generalist IT services firm. We are specialists — deeply technical, delivery-focused, and structured to execute on the most complex engineering programs.
              </p>
              <Link href="/contact" className="btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-4">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
