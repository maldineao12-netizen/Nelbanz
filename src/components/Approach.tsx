"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, TrendingUp, ChevronRight } from "lucide-react";

export default function Approach() {
  const pillars = [
    {
      number: "01",
      title: "APRENDE",
      description: "Constrói uma base técnica sólida compreendendo os princípios, arquiteturas e conceitos essenciais da tecnologia.",
      icon: BookOpen,
      gradient: "from-[#0878E8] to-[#1800A8]"
    },
    {
      number: "02",
      title: "PRATICA",
      description: "Aplica os conhecimentos através de exercícios intensivos, cenários simulados e laboratórios presenciais com equipamentos reais.",
      icon: Cpu,
      gradient: "from-[#00D2FF] to-[#0878E8]"
    },
    {
      number: "03",
      title: "EVOLUI",
      description: "Desenvolve autonomia técnica e competências sólidas aplicáveis que impulsionam a tua evolução académica e profissional.",
      icon: TrendingUp,
      gradient: "from-[#1800A8] to-[#00D2FF]"
    }
  ];

  return (
    <section className="py-20 bg-[#080A45]/40 border-y border-[#1E295D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30">
            A NOSSA METODOLOGIA
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            APRENDE. PRATICA. EVOLUI.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Um modelo de ensino integrado que transforma o tempo de aula em competência executável.
          </p>
        </div>

        {/* Pillars Visual Grid with Connection Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#0A102A] p-8 rounded-2xl border border-[#1E295D] relative group hover:border-[#0878E8] transition-all glow-blue"
              >
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-4xl font-extrabold text-slate-600 group-hover:text-[#00D2FF] transition-colors">
                    {pillar.number}
                  </span>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-2xl text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Connecting Arrow for Desktop */}
                {index < pillars.length - 1 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#080A45] border border-[#1E295D] items-center justify-center text-[#00D2FF]">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
