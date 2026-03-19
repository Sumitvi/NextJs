"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useMemo } from "react";
import { ArrowUpRight, Zap, Shield, Cpu } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Rotations for the entire scene
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-20deg", "20deg"]);

  // Particle Generation (Emerald Tint)
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 600 - 300,
    }));
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX / rect.width - 0.5);
    mouseY.set(e.clientY / rect.height - 0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full flex items-center justify-center bg-[#030303] overflow-hidden relative [perspective:2000px] font-sans"
    >
      {/* 1. THE 3D VOID (Emerald Particles) */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              translateZ: p.z,
              x: useTransform(smoothX, [-0.5, 0.5], [p.z / 10, -p.z / 10]),
              y: useTransform(smoothY, [-0.5, 0.5], [p.z / 10, -p.z / 10]),
            }}
            className="absolute w-1 h-1 bg-emerald-500/30 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* 2. THE FLOATING MONOLITH */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-5xl h-[600px] flex items-center justify-center"
      >
        {/* Wireframe Backdrop (Emerald Tint) */}
        <div className="absolute inset-0 border-[1px] border-emerald-500/5 rounded-full scale-150 rotate-45 [transform:translateZ(-200px)] pointer-events-none" />
        <div className="absolute inset-0 border-[1px] border-emerald-500/10 rounded-full scale-110 -rotate-12 [transform:translateZ(-100px)] pointer-events-none" />

        {/* Floating Icons */}
        <motion.div 
          style={{ translateZ: "180px" }}
          className="absolute top-0 right-10 p-4 bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-2xl hidden lg:block shadow-[0_0_30px_rgba(16,185,129,0.1)]"
        >
          <Cpu className="text-emerald-400 w-8 h-8 animate-pulse" />
        </motion.div>

        <motion.div 
          style={{ translateZ: "280px" }}
          className="absolute bottom-20 left-0 p-4 bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-2xl hidden lg:block shadow-[0_0_30px_rgba(16,185,129,0.1)]"
        >
          <Shield className="text-emerald-500 w-8 h-8" />
        </motion.div>

        {/* 3. CENTER CONTENT */}
        <div className="relative flex flex-col items-center z-10 [transform-style:preserve-3d]">
          <motion.div
            style={{ translateZ: "100px" }}
            className="mb-6 px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-300 font-black">
              System Architecture Studio
            </span>
          </motion.div>

          <motion.h1
            style={{ translateZ: "50px" }}
            className="text-[12vw] lg:text-[10rem] font-black leading-[0.8] text-white uppercase tracking-tighter text-center"
          >
            WEB <br />
            <span className="relative inline-block italic font-light text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 to-emerald-600">
              VERSE
              <span className="absolute inset-0 text-white/5 [transform:translateZ(-40px)] select-none">VERSE</span>
            </span>
          </motion.h1>

          <motion.p
            style={{ translateZ: "80px" }}
            className="mt-12 text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed text-center"
          >
            Forging hyper-performance digital infrastructures with 
            unrivaled structural precision.
          </motion.p>

          <motion.div
            style={{ translateZ: "120px" }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <button className="group relative px-12 py-5 bg-emerald-600 text-white rounded-full font-bold overflow-hidden transition-transform hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              <span className="relative z-10 flex items-center gap-2">Initialize Protocol <Zap className="w-4 h-4"/></span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
            </button>

            <button className="group px-12 py-5 border border-emerald-500/20 text-emerald-100 rounded-full font-bold hover:bg-emerald-500/10 transition-all flex items-center gap-2.5">
              Explore Vault <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* 4. THE 3D GLASS SHARDS (Emerald Tints) */}
        <motion.div
          style={{ 
            translateZ: "350px",
            rotateZ: 45,
            x: useTransform(smoothX, [-0.5, 0.5], [100, -100]),
            y: useTransform(smoothY, [-0.5, 0.5], [100, -100]),
          }}
          className="absolute top-10 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-2xl border border-emerald-500/20 rounded-lg pointer-events-none hidden md:block"
        />
        
        <motion.div
          style={{ 
            translateZ: "500px",
            rotateZ: -15,
            x: useTransform(smoothX, [-0.5, 0.5], [-150, 150]),
            y: useTransform(smoothY, [-0.5, 0.5], [-150, 150]),
          }}
          className="absolute bottom-5 right-[10%] w-48 h-48 bg-gradient-to-tr from-emerald-500/10 to-transparent backdrop-blur-3xl border border-emerald-500/20 rounded-full pointer-events-none hidden md:block shadow-[0_0_50px_rgba(16,185,129,0.05)]"
        />
      </motion.div>

      {/* 5. FINISHING (Obsidian Vignette) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)]" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}