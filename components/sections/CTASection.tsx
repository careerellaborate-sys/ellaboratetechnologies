import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";

export default function CTASection() {
  return (
    <section className="section-padding bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative rounded-3xl bg-cta-gradient overflow-hidden px-8 sm:px-16 py-16 sm:py-20 text-center">
            {/* Background texture */}
            <div className="absolute inset-0 hero-grid-bg opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold text-blue-200 tracking-widest uppercase mb-4">
                Ready to Build?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Engineer Your Next
                <br />Intelligent System
              </h2>
              <p className="text-blue-100 max-w-xl mx-auto mb-10 leading-relaxed">
                Book a free consultation with our engineering team. We&apos;ll review your requirements and propose the right architecture, timeline, and team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-navy font-bold text-sm hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Calendar size={16} />
                  Book Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  View Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
