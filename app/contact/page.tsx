"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/ui/motion";

// Note: Export metadata from a separate server component if needed.
// For this client component, metadata is defined in a layout or separate file.

const serviceTypes = [
  "AI / ML Development",
  "IoT Hardware & Firmware",
  "Autonomous Systems",
  "ERP Solutions (SAP/Oracle)",
  "Software Development",
  "R&D & Prototyping",
  "Technology Consulting",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.message.trim() || form.message.length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      // Replace FORMSPREE_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
      errors[field] ? "border-red-400 bg-red-50/30" : "border-gray-200 bg-white hover:border-gray-300 focus:border-brand-blue"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h1 className="heading-xl mb-6">
              Let&apos;s Build Something <span className="text-gradient">Remarkable</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us about your project. Our engineering team will review your requirements and respond within one business day.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <FadeUp className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="heading-md text-brand-dark mb-4">Contact Details</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Reach us directly or fill in the form. We respond to all enquiries within 24 business hours.
                  </p>
                </div>

                {[
                  { icon: Mail, label: "Email", value: "info@ellaboratetechnologies.com", href: "mailto:info@ellaboratetechnologies.com" },
                  { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
                  { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India 500032", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm text-brand-dark hover:text-brand-blue transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-brand-dark font-medium">{value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="p-6 rounded-2xl bg-brand-dark text-white">
                  <h3 className="font-semibold mb-2 text-sm">Business Hours</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Monday – Friday: 9:00 AM – 7:00 PM IST</p>
                  <p className="text-gray-400 text-xs mt-1">Saturday: 10:00 AM – 2:00 PM IST</p>
                  <p className="text-gray-400 text-xs mt-1">Response SLA: 1 business day</p>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.1} className="lg:col-span-2">
              <div className="card-base p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={36} className="text-emerald-500" />
                      </div>
                      <h3 className="heading-md text-brand-dark mb-3">Message Sent!</h3>
                      <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. Our team will review your message and respond within 1 business day.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="btn-secondary mt-8"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} noValidate>
                      <h2 className="heading-md text-brand-dark mb-8">Send Us a Message</h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass("name")}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass("email")}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass("phone")}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Service Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={inputClass("service")}
                          >
                            <option value="">Select a service...</option>
                            {serviceTypes.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Describe your project, requirements, timeline, and any specific technical constraints..."
                          value={form.message}
                          onChange={handleChange}
                          className={`${inputClass("message")} resize-none`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 border border-red-200 mb-5">
                          <AlertCircle size={16} className="text-red-500 shrink-0" />
                          <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-cta w-full py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send size={16} />
                            Send Message
                          </span>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
