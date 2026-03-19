"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center px-6 
      ${scrolled ? "py-4" : "py-8"}`}
    >
      <nav 
        className={`relative flex items-center justify-between w-full max-w-6xl px-8 py-3 rounded-full border transition-all duration-500 z-[110]
        ${scrolled || isOpen
          ? "bg-[#030303]/90 backdrop-blur-xl border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)]" 
          : "bg-transparent border-transparent"}`}
      >
        {/* Logo */}
        <motion.div whileHover={{ x: 5 }} className="relative z-10">
          <Link href="/" className="text-xl font-black tracking-tighter text-white uppercase italic">
            WebVerse<span className="text-emerald-500">.</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300
                  ${isActive ? "text-emerald-400" : "text-gray-400 hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300"
          >
            Start Project
          </motion.button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer group relative z-[120] p-2"
        >
          <motion.div 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white transition-colors group-hover:bg-emerald-500"
          />
          <motion.div 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-4 h-[2px] bg-white self-end transition-colors group-hover:bg-emerald-500"
          />
          <motion.div 
            animate={isOpen ? { rotate: -45, y: -8, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
            className="w-4 h-[2px] bg-white self-end transition-colors group-hover:bg-emerald-500"
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#030303] z-[100] flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-4xl font-black uppercase tracking-tighter transition-colors
                      ${pathname === link.href ? "text-emerald-500" : "text-white hover:text-emerald-400"}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-emerald-600 text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest"
              >
                Start Project
              </motion.button>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none">
              <h2 className="text-[20vw] font-black text-white">MENU</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}