"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function Audience() {
  const [selectedLevel, setSelectedLevel] = useState<string>("Iniciante");

  const levels = [
    {
      id: "Iniciante",
      title: "SOU INICIANTE",
      subtitle: "Nunca estudei TI ou estou no início absoluto",
      recommendation: "Recomendamos começar pelo Percurso 01: Helpdesk & Suporte Técnico + Redes Essencial. Construirás uma base técnica sem pressa.",
      recommendedCourses: ["Helpdesk & Suporte Técnico", "Redes de Computadores Essencial"]
    },
    {
      id: "Básico/Intermédio",
      title: "JÁ TENHO ALGUNS CONHECIMENTOS",
      subtitle: "Já conheço conceitos mas falta-me prática estruturada",
      recommendation: "Recomendamos avançar para CCNA, Administração de Servidores ou Programação para consolidar práticas em laboratório real.",
      recommendedCourses: ["CCNA Routing & Switching", "Administração de Servidores", "Programação & Algoritmos"]
    },
    {
      id: "Profissional",
      title: "JÁ TRABALHO COM TI",
      subtitle: "Procuro especialização técnica e diferenciação",
      recommendation: "Recomendamos módulos focados em Segurança/Cybersecurity, Servidores avançados ou Inglês Técnico para expansão de carreira.",
      recommendedCourses: ["Segurança & Cybersecurity", "Administração de Servidores", "Inglês Técnico para TI"]
    }
  ];

  const currentLevelObj = levels.find(l => l.id === selectedLevel) || levels[0];

  const handleConsultClick = () => {
    trackEvent("click_help_me_choose", { level: selectedLevel });
    const msg = `Olá, NELBANZ! O meu nível atual em TI é "${selectedLevel}". Podem ajudar-me a escolher a formação mais indicada para o meu objetivo?`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section className="py-20 bg-[#00081B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#00D2FF]" />
            SEM PÂNICO
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            NUNCA ESTUDASTE TI? NÃO HÁ PROBLEMA.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            "Nem todas as pessoas começam pelo mesmo ponto. O importante é escolher uma formação compatível com o teu nível atual."
          </p>
        </div>

        {/* Level Tabs Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setSelectedLevel(lvl.id)}
              className={`p-6 rounded-2xl border text-left transition-all font-mono ${
                selectedLevel === lvl.id
                  ? "bg-[#080A45] border-[#0878E8] shadow-lg glow-blue text-white"
                  : "bg-[#0A102A] border-[#1E295D] text-slate-400 hover:border-[#0878E8]/50 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base text-white">{lvl.title}</span>
                {selectedLevel === lvl.id && <Sparkles className="w-4 h-4 text-[#00D2FF]" />}
              </div>
              <p className="text-xs text-slate-300 leading-snug font-sans">
                {lvl.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Dynamic Recommendation Result Card */}
        <motion.div
          key={selectedLevel}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0A102A] border border-[#1E295D] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-mono font-bold text-[#00D2FF] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
              DIAGNÓSTICO RECOMENDADO
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {currentLevelObj.recommendation}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {currentLevelObj.recommendedCourses.map((c, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded bg-[#080A45] border border-[#0878E8]/40 text-slate-200 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00D2FF]" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleConsultClick}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue"
          >
            <span>AJUDA-ME A ESCOLHER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
