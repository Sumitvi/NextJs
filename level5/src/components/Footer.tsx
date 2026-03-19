"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030303] pt-32 pb-12 px-6 overflow-hidden border-t border-emerald-500/10">
      
      {/* 1. Large Background Watermark */}
      <div className="absolute -bottom-10 left-0 right-0 opacity-[0.03] select-none pointer-events-none text-center">
        <h2 className="text-[25vw] font-black leading-none uppercase tracking-tighter text-white">
          WEBVERSE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand & Status */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic">
              WebVerse<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Architecting high-performance digital ecosystems for the next generation of industry leaders.
            </p>
            <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/5 border border-emerald-500/20 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">Systems Active</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-[0.3em] font-black mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="text-gray-500 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-[0.3em] font-black mb-8">Capabilities</h3>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li className="hover:text-emerald-400 transition-colors cursor-default">Web Engineering</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Design Systems</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Algorithmic SEO</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Creative Direction</li>
            </ul>
          </div>

          {/* Connectivity */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xs uppercase tracking-[0.3em] font-black mb-8">Connectivity</h3>
              <div className="flex gap-4">
                {[FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, color: "#10b981" }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all shadow-lg hover:border-emerald-500/30"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.a 
              href="mailto:contact@webverse.com"
              className="flex items-center gap-3 p-4 bg-emerald-500 text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-all group"
            >
              <Mail className="w-4 h-4" />
              Contact Hub
              <ArrowUpRight className="ml-auto w-4 h-4 group-hover:rotate-45 transition-transform" />
            </motion.a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            © {currentYear} WEBVERSE ARCHITECTURE UNIT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}