import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, X, ArrowRight, HelpCircle } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pricing | Consulting, Prototyping & Enterprise Development Plans",
  description:
    "Transparent pricing for Ellaborate Technologies consulting, prototyping, and full product development. Custom enterprise plans available.",
  alternates: { canonical: "https://ellaboratetechnologies.com/pricing" },
};

const consultingPlans = [
  {
    name: "Advisory Session",
    price: "₹15,000",
    unit: "per session",
    desc: "2-hour deep-dive with a senior engineer. Architecture review, problem analysis, or technology selection.",
    features: ["2-hour video consultation", "Pre-session brief review", "Written recommendation summary", "Follow-up Q&A (30 min)"],
    cta: "Book Session",
    highlight: false,
  },
  {
    name: "Sprint Advisory",
    price: "₹75,000",
    unit: "per month",
    desc: "Ongoing advisory engagement. Weekly calls, document reviews, and on-call access to a senior engineer.",
    features: ["Weekly 1-hr strategy calls", "Architecture document reviews", "On-call Slack access (business hours)", "Monthly progress report", "Up to 4 ad-hoc reviews/month"],
    cta: "Start Engagement",
    highlight: true,
  },
  {
    name: "Strategic Partnership",
    price: "Custom",
    unit: "annual contract",
    desc: "Embedded advisory for enterprise tech teams. Dedicated CTO-equivalent or senior architect on retainer.",
    features: ["Dedicated senior advisor", "Unlimited consultations", "Quarterly strategy workshops", "Vendor negotiation support", "Board/investor presentation support"],
    cta: "Contact Us",
    highlight: false,
  },
];

const devPlans = [
  {
    name: "Rapid Prototype",
    price: "₹2,50,000+",
    unit: "fixed scope",
    timeline: "4–8 weeks",
    desc: "Working proof-of-concept hardware or software prototype to validate your idea before full investment.",
    features: ["Feasibility analysis", "Working prototype build", "Basic documentation", "1 revision cycle", "Delivery report"],
    highlight: false,
  },
  {
    name: "MVP Development",
    price: "₹8,00,000+",
    unit: "fixed scope",
    timeline: "8–16 weeks",
    desc: "Full minimum viable product for a software, IoT, or AI application — ready for user testing and investment rounds.",
    features: ["Requirements scoping workshop", "Full MVP development", "QA & testing coverage", "Technical documentation", "Cloud deployment", "2-week post-launch support"],
    highlight: true,
  },
  {
    name: "Product Engineering",
    price: "Custom",
    unit: "T&M or fixed",
    timeline: "Ongoing",
    desc: "Full product development engagement with a dedicated engineering team. From MVP to production scale.",
    features: ["Dedicated team (3–12 engineers)", "Agile delivery cadence", "Architecture and DevOps included", "Quarterly roadmap planning", "SLA-backed delivery", "Ongoing maintenance option"],
    highlight: false,
  },
];

const features = [
  { feature: "Dedicated Project Manager", advisory: true, mvp: true, enterprise: true },
  { feature: "Senior Engineers on Project", advisory: false, mvp: true, enterprise: true },
  { feature: "Architecture Documentation", advisory: "Review only", mvp: true, enterprise: true },
  { feature: "Source Code Handover", advisory: false, mvp: true, enterprise: true },
  { feature: "Cloud Deployment", advisory: false, mvp: true, enterprise: true },
  { feature: "Post-Delivery Support", advisory: "30 min follow-up", mvp: "2 weeks", enterprise: "Custom SLA" },
  { feature: "NDA / IP Assignment", advisory: true, mvp: true, enterprise: true },
  { feature: "Milestone-Based Billing", advisory: false, mvp: true, enterprise: true },
  { feature: "Embedded Team Option", advisory: false, mvp: false, enterprise: true },
  { feature: "Priority Response SLA", advisory: false, mvp: false, enterprise: true },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 size={18} className="text-emerald-500 mx-auto" />;
  if (value === false) return <X size={16} className="text-gray-300 mx-auto" />;
  return <span className="text-sm text-gray-600">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 block">Pricing</span>
            <h1 className="heading-xl mb-6">
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-gray-300 text-lg">
              No hidden costs. No surprise invoices. We price our work fairly and explain exactly what you get.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Consulting */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3 block">Advisory</span>
            <h2 className="heading-lg text-brand-dark">Consulting Pricing</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {consultingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`card-base p-8 h-full flex flex-col ${plan.highlight ? "ring-2 ring-brand-blue shadow-lg shadow-brand-blue/10 relative" : ""}`}>
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-semibold">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-brand-dark text-lg mb-1">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-brand-dark">{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-2">{plan.unit}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all ${plan.highlight ? "btn-cta" : "btn-secondary"}`}>
                    {plan.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Development */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-brand-blue tracking-widest uppercase mb-3 block">Engineering</span>
            <h2 className="heading-lg text-brand-dark">Product Development Plans</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {devPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`card-base p-8 h-full flex flex-col ${plan.highlight ? "ring-2 ring-brand-blue shadow-lg shadow-brand-blue/10 relative" : ""}`}>
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-semibold">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-brand-dark text-lg mb-1">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-brand-dark">{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-2">{plan.unit}</span>
                  </div>
                  <span className="text-xs font-medium text-brand-blue mb-3 block">Timeline: {plan.timeline}</span>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all ${plan.highlight ? "btn-cta" : "btn-secondary"}`}>
                    Get a Quote <ArrowRight size={14} className="inline ml-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="heading-lg text-brand-dark">Feature Comparison</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm max-w-4xl mx-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-5 font-semibold text-brand-dark">Feature</th>
                    <th className="text-center p-5 font-semibold text-brand-dark">Advisory</th>
                    <th className="text-center p-5 font-semibold text-brand-dark bg-blue-50/50">MVP Dev</th>
                    <th className="text-center p-5 font-semibold text-brand-dark">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-gray-50/30" : ""}`}>
                      <td className="p-5 text-gray-700 font-medium">{row.feature}</td>
                      <td className="p-5 text-center"><FeatureCell value={row.advisory} /></td>
                      <td className="p-5 text-center bg-blue-50/30"><FeatureCell value={row.mvp} /></td>
                      <td className="p-5 text-center"><FeatureCell value={row.enterprise} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          {/* FAQ note */}
          <FadeUp delay={0.2} className="mt-12 max-w-2xl mx-auto text-center">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <HelpCircle size={20} className="text-brand-blue mx-auto mb-3" />
              <p className="text-sm text-gray-600 leading-relaxed">
                All prices shown are indicative starting points. Final project pricing is based on scope, complexity, and timeline. Request a free scoping call to get an accurate estimate for your project.
              </p>
              <Link href="/contact" className="btn-primary mt-4 mx-auto text-sm">
                Request Accurate Quote <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
