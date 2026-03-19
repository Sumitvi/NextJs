"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Code2, Award } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <main className="bg-[#030303] min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar />

      {/* 1. Hero Briefing Section */}
      <section ref={containerRef} className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[30vw] font-black uppercase text-white">MISSION</h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div style={{ opacity, scale }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black">Entity Identification</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase"
            >
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-700 italic font-light">
                Standard Code.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-lg border-l border-emerald-500/20 pl-8"
            >
              We are a specialized engineering collective focused on architecting 
              the future of digital interaction through high-fidelity systems.
            </motion.p>
          </motion.div>

          {/* 3D Floating Artifact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80">
              {/* Outer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-emerald-500/10 rounded-[40%] scale-125"
              />
              {/* Inner Core */}
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-500/20 to-transparent backdrop-blur-3xl rounded-3xl border border-emerald-500/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <Globe className="w-20 h-20 text-emerald-500/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Metrics Section */}
      <section className="py-20 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Protocols Deployed", val: "150+", icon: Code2 },
            { label: "Global Clients", val: "42", icon: Users },
            { label: "Design Awards", val: "12", icon: Award },
            { label: "Uptime Metric", val: "99.9%", icon: Globe },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center lg:items-start space-y-4"
            >
              <stat.icon className="w-5 h-5 text-emerald-500/40" />
              <h3 className="text-4xl font-black text-white tabular-nums">{stat.val}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Team Narrative Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Engineering <span className="italic font-light text-emerald-500">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Founded on the principle that digital environments should be as structured 
            as physical architecture, WebVerse operates at the intersection of 
            computational efficiency and transcendent aesthetics. We don't just 
            build websites; we engineer experiences that dominate their respective 
            market verticals.
          </p>
          <div className="pt-10">
            <button className="px-12 py-5 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
              Join Our Registry
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}