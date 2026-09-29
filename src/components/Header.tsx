"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageSquare } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteData";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConsultantClick = () => {
    trackEvent("click_whatsapp", { location: "header" });
    window.open(getWhatsAppUrl("Olá! Gostaria de falar com um consultor da NELBANZ sobre os cursos."), "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00081B]/90 backdrop-blur-md border-b border-[#1E295D]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo & Tagline */}
        <Link
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#080A45] p-1 border border-[#0878E8]/40 group-hover:border-[#0878E8] transition-colors">
            <Image
              src="/images/nelbanz-logo-original.jpg"
              alt="NELBANZ Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight flex items-center gap-1">
              NEL<span className="text-[#0878E8]">BANZ</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold font-mono">
              ACADEMIA TECNOLÓGICA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#0878E8] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Header Right Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleConsultantClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Falar com um consultor</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleConsultantClick}
            className="inline-flex items-center justify-center p-2 rounded-lg bg-[#0878E8] text-white hover:bg-[#0878E8]/90"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#080A45] border border-[#1E295D]/60"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#00081B] border-b border-[#1E295D] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-[#080A45]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleConsultantClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white bg-[#0878E8] hover:bg-[#0878E8]/90"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Falar com um consultor (WhatsApp)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
