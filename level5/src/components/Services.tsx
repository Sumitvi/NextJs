"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Layout, Search, Rocket, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const services = [
  {
    title: "Web Development",
    desc: "Architecting high-performance digital ecosystems using Next.js and specialized backend infrastructures.",
    icon: Code2,
    tag: "Protocol 01",
  },
  {
    title: "UI/UX Design",
    desc: "Transcendent visual narratives and design systems built for human-centric digital interaction.",
    icon: Layout,
    tag: "Protocol 02",
  },
  {
    title: "SEO Optimization",
    desc: "Strategic engineering for search dominance, ensuring your digital presence is indexed with precision.",
    icon: Search,
    tag: "Protocol 03",
  },
  {
    title: "Landing Pages",
    desc: "Hyper-focused conversion environments engineered to turn visitors into persistent brand advocates.",
    icon: Rocket,
    tag: "Protocol 04",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.8em] text-emerald-500 font-black block mb-4"
            >
              Operational Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Core <br />
              <span className="italic font-light text-emerald-500/50">Services.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg max-w-xs font-light leading-relaxed border-l border-emerald-500/20 pl-6"
          >
            We eliminate digital noise to focus on high-fidelity performance.
          </motion.p>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      className="group relative p-8 rounded-3xl border border-white/5 bg-[#080808] overflow-hidden transition-all duration-500 hover:border-emerald-500/30"
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
        <div>
          <div className="flex justify-between items-start mb-12">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <service.icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black text-emerald-500/40 uppercase tracking-widest pt-2">
              {service.tag}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-emerald-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">
            {service.desc}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-emerald-500/60 group-hover:text-emerald-400 transition-colors text-[10px] font-black uppercase tracking-widest">
          View Protocol <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  );
}

// Helper for the motion template
import { useMotionTemplate } from "framer-motion";