"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#030303] min-h-screen selection:bg-emerald-500 selection:text-black">
      <Navbar />

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
          
          {/* 1. Left Side: Context & Connectivity */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 w-fit mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-300 font-black">Transmission Channel</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-10"
            >
              Start the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700 italic font-light">
                Dialogue.
              </span>
            </motion.h1>

            <div className="space-y-8 mt-4">
              {[
                { icon: Mail, label: "Registry Email", val: "contact@webverse.com" },
                { icon: Globe, label: "Current Timezone", val: "GMT +5:30 (Online)" },
                { icon: MapPin, label: "HQ Location", val: "Digital Architecture Void" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all">
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-emerald-300 transition-colors">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. Right Side: The Secure Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[2.5rem] border border-white/5 bg-[#080808] relative group"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-emerald-500/[0.02] rounded-[2.5rem] pointer-events-none" />

            <form className="flex flex-col gap-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-2">Identifiction</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 bg-[#030303] border border-white/5 rounded-2xl focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-gray-700 font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-2">Email Endpoint</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full p-4 bg-[#030303] border border-white/5 rounded-2xl focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-gray-700 font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-2">Mission Parameters</label>
                <textarea
                  rows={5}
                  placeholder="Describe your project goals..."
                  className="w-full p-4 bg-[#030303] border border-white/5 rounded-2xl focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-gray-700 font-light resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all shadow-2xl shadow-emerald-500/20"
              >
                Execute Transmission
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>

            <div className="mt-8 flex items-center gap-2 text-center justify-center">
              <MessageSquare className="w-3 h-3 text-emerald-500/50" />
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Typical response time: &lt; 24 Hours</p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}