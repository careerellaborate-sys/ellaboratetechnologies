"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";

const testimonials = [
  {
    quote: "Ellaborate delivered a production-grade computer vision system for our quality inspection line in under 4 months. The accuracy exceeded our expectations and reduced defect rates by 34%.",
    name: "Rajesh Kumar",
    title: "CTO, AutoManufacture Industries",
    company: "Manufacturing",
  },
  {
    quote: "Their IoT firmware team built our entire remote monitoring platform from scratch — hardware, embedded software, and cloud dashboard. Exceptional technical depth and communication throughout.",
    name: "Priya Sharma",
    title: "Head of Engineering, InfraTech Solutions",
    company: "Infrastructure",
  },
  {
    quote: "The SAP S/4HANA migration they led for us was seamless. They handled every integration touchpoint, data migration, and training. Our operations team was up and running in record time.",
    name: "Arun Mehta",
    title: "VP Operations, RetailMax Group",
    company: "Retail",
  },
  {
    quote: "We hired Ellaborate to prototype our autonomous navigation stack. In 8 weeks they delivered a working SLAM implementation. Professional, fast, and technically brilliant.",
    name: "David Chen",
    title: "Founder, RoboNav Labs",
    company: "Robotics",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-3 block">
            Client Results
          </span>
          <h2 className="heading-lg text-white">
            What Our Clients Say
          </h2>
        </FadeUp>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="w-14 h-14 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <Quote size={24} className="text-brand-blue" />
                </div>
              </div>
              <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-white">{testimonials[current].name}</div>
                <div className="text-sm text-gray-400 mt-1">{testimonials[current].title}</div>
                <div className="text-xs text-brand-blue mt-1 uppercase tracking-wider">{testimonials[current].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/60 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-brand-blue" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/60 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
