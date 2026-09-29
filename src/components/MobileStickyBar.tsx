"use client";

import Link from "next/link";
import { MessageSquare, BookOpen } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function MobileStickyBar() {
  const handleWhatsAppClick = () => {
    trackEvent("click_whatsapp", { location: "floating_or_bottom_bar" });
    window.open(getWhatsAppUrl("Olá, NELBANZ! Gostaria de falar com a equipa."), "_blank");
  };

  return (
    <>
      {/* Permanent Floating WhatsApp Button (Desktop & Mobile) */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center glow-blue"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </button>

      {/* Mobile Sticky Bottom Bar (UX Mobile CRO Rule: VER CURSOS | WHATSAPP) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#00081B]/95 backdrop-blur-md border-t border-[#1E295D] p-3 flex items-center gap-3">
        <Link
          href="#cursos"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#080A45] border border-[#0878E8]/50 text-white font-bold text-xs font-mono uppercase"
        >
          <BookOpen className="w-4 h-4 text-[#00D2FF]" />
          <span>VER CURSOS</span>
        </Link>

        <button
          onClick={handleWhatsAppClick}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0878E8] text-white font-bold text-xs font-mono uppercase shadow-lg"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </button>
      </div>
    </>
  );
}
