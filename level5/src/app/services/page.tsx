"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Layout, Search, Rocket, ArrowUpRight, Zap } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Web Engineering",
    desc: "Architecting high-performance digital ecosystems using Next.js and specialized backend infrastructures.",
    icon: Code2,
    id: "01",
  },
  {
    title: "Transcendent UI/UX",
    desc: "Visual narratives and design systems built for high-conversion human-centric digital interaction.",
    icon: Layout,
    id: "02",
  },
  {
    title: "Algorithmic SEO",
    desc: "Strategic engineering for search dominance, ensuring your digital presence is indexed with precision.",
    icon: Search,
    id: "03",
  },
  {
    title: "Performance Landing Pages",
    desc: "Hyper-focused environments engineered to turn visitors into persistent brand advocates.",
    icon: Rocket,
    id: "04",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#030303] min-h-screen">
      <Navbar />

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background Mesh Effect */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header */}
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8"
            >
              <Zap className="w-3 h-3 text-emerald-500" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-300 font-black">Core Capabilities</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase mb-8"
            >
              High <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-700 italic font-light">
                Fidelity Systems.
              </span>
            </motion.h1>
          </div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceModule key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceModule({ service, index }: { service: any; index: number }) {
  // Mouse tracking for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-10 rounded-[2rem] border border-white/5 bg-[#080808] hover:border-emerald-500/30 transition-all duration-700 [perspective:1000px]"
    >
      {/* Dynamic Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-16">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
            <service.icon className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-black text-emerald-500/30 uppercase tracking-[0.5em] pt-4">
            REG: {service.id}
          </span>
        </div>

        <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6 group-hover:text-emerald-400 transition-colors duration-500">
          {service.title}
        </h3>
        
        <p className="text-gray-500 text-lg font-light leading-relaxed mb-12 group-hover:text-gray-300 transition-colors duration-500">
          {service.desc}
        </p>

        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between group-hover:border-emerald-500/20 transition-colors">
          <span className="text-[10px] uppercase tracking-widest font-black text-emerald-500/60">Initialize Deployment</span>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 -rotate-45 group-hover:rotate-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}