import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

const services = [
  { label: "AI/ML Development", href: "/services#ai-ml" },
  { label: "IoT Hardware", href: "/services#iot" },
  { label: "Autonomous Systems", href: "/services#autonomous" },
  { label: "ERP Solutions", href: "/services#erp" },
  { label: "Software Development", href: "/services#software" },
  { label: "R&D & Prototyping", href: "/services#rd" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cta-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Ellaborate</span>
                <span className="block text-[10px] font-medium text-blue-400 leading-none tracking-widest uppercase">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Precision engineering for AI, IoT, and autonomous technologies. Building intelligent systems that power the future.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors group flex items-center gap-1"
                  >
                    <span className="group-hover:underline underline-offset-2">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Company</h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors group flex items-center gap-1"
                  >
                    <span className="group-hover:underline underline-offset-2">{c.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-blue shrink-0" />
                <a href="mailto:info@ellaboratetechnologies.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@ellaboratetechnologies.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-blue shrink-0" />
                <a href="tel:+919999999999" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-blue-300 transition-colors"
            >
              Book a Consultation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ellaborate Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
