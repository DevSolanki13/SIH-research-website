"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("field-intel");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Field Intel", href: "#field-intel" },
    { name: "Ground Insights", href: "#ground-insights" },
    { name: "Design Bridge", href: "#design-bridge" },
    { name: "Demo & Flow", href: "#demo-flow" },
    { name: "Evidence", href: "#evidence" },
    { name: "Status", href: "#status" },
    { name: "Sources", href: "#sources" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].href.substring(1);
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <header className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm rounded-2xl pointer-events-auto transition-all">
        <div className="px-4 py-2.5 flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-emerald-700 transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-slate-900 tracking-tight">
                  BHAAV
                </span>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded font-semibold">
                  EVIDENCE PORTAL
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 -mt-0.5">
                Vasai–Virar Study · SIH 2026
              </span>
            </div>
          </Link>

          {/* Desktop Nav Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 p-3 bg-white rounded-b-2xl space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-50 px-3 py-2 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
