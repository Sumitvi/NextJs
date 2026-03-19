"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "ARCH-01",
    title: "Quantum Nexus",
    category: "Web Architecture",
    stack: ["Next.js", "Three.js", "GSAP"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ARCH-02",
    title: "Vesper Intelligence",
    category: "AI Dashboard",
    stack: ["React", "Tailwind", "Python"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ARCH-03",
    title: "Ether Engine",
    category: "E-Commerce",
    stack: ["Shopify", "Node.js", "Emerald UI"],
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
  },
];

export default function PortfolioPage() {
  const containerRef = useRef(null);

  return (
    <main className="bg-[#030303] min-h-screen">
      <Navbar />

      <section ref={containerRef} className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] uppercase tracking-[0.8em] text-emerald-500 font-black block mb-4"
              >
                Project Registry
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase"
              >
                Selected <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200 italic font-light">
                  Artifacts.
                </span>
              </motion.h1>
            </div>
            <p className="text-gray-500 text-sm md:text-lg max-w-xs font-light leading-relaxed">
              A curated collection of high-fidelity digital solutions deployed across the global network.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 p-12 rounded-[3rem] border border-emerald-500/10 bg-emerald-500/[0.02] text-center"
          >
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">Ready to initiate your mission?</h2>
            <button className="px-12 py-5 bg-emerald-600 text-white rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-2xl shadow-emerald-500/20">
              Begin Deployment
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
    >
      {/* Image Container with 3D Warp */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-900 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-700">
        
        {/* Emerald Scanline Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/50 blur-[2px] animate-scan" />
        </div>

        <motion.img
          whileHover={{ scale: 1.1, rotate: 2 }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
        />

        {/* Hover Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((s: string) => (
              <span key={s} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-sm bg-emerald-500 text-black">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Text Details */}
      <div className="mt-8 px-2">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-black text-emerald-500/40 uppercase tracking-widest">
            {project.id}
          </span>
          <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-emerald-500 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm font-light mt-1">{project.category}</p>
      </div>
    </motion.div>
  );
}