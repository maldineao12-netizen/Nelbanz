"use client";

import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function FinalCTA() {
  const handleFinalWhatsApp = () => {
    trackEvent("click_whatsapp", { location: "final_cta" });
    window.open(
      getWhatsAppUrl("Olá, NELBANZ! Estou pronto para dar o próximo passo. Gostaria de saber qual é o próximo passo para a inscrição."),
      "_blank"
    );
  };

  return (
    <section className="py-24 bg-[#00081B] relative overflow-hidden border-t border-[#1E295D]">
      {/* Dark Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0878E8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080A45] border border-[#0878E8]/40 text-[#00D2FF] text-xs font-mono font-bold tracking-widest uppercase">
          PRONTO PARA COMEÇAR?
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          TRANSFORMA O TEU INTERESSE EM{" "}
          <span className="text-[#0878E8]">COMPETÊNCIA REAL.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Conta-nos onde estás hoje e o que queres aprender. A nossa equipa ajuda-te a encontrar a formação mais adequada ao teu objetivo.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleFinalWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-5 h-5" />
            <span>FALAR COM A NELBANZ</span>
          </button>

          <Link
            href="#cursos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-slate-200 bg-[#0A102A] border border-[#1E295D] hover:border-[#0878E8] hover:text-white transition-all"
          >
            <span>VER FORMAÇÕES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="pt-4 text-xs font-mono text-slate-400">
          📍 Luanda, Angola • Formação Prática Presencial
        </div>

      </div>
    </section>
  );
}
