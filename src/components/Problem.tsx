"use client";

import { motion } from "framer-motion";
import { BookX, Wrench, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Problem() {
  const problems = [
    {
      icon: BookX,
      title: "MUITA TEORIA",
      description: "Conhecimento sem prática pode ser difícil de aplicar quando surge um problema real em produção.",
      accentColor: "border-red-500/30 text-red-400"
    },
    {
      icon: Wrench,
      title: "POUCA EXPERIÊNCIA",
      description: "O mercado exige capacidade imediata de resolver problemas técnicos, não apenas conceitos memorizados.",
      accentColor: "border-amber-500/30 text-amber-400"
    },
    {
      icon: Compass,
      title: "FALTA DE DIREÇÃO",
      description: "Muitos iniciantes não sabem por onde começar nem qual a sequência certa para evoluir na área de TI.",
      accentColor: "border-blue-500/30 text-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-[#00081B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30">
            O DESAFIO ATUAL
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            APRENDER TECNOLOGIA NÃO DEVERIA SER APENAS ASSISTIR A AULAS.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            "Muita formação termina quando a aula acaba. O aluno memoriza conceitos, mas nem sempre sabe aplicá-los."
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0A102A] p-8 rounded-2xl border border-[#1E295D] hover:border-[#0878E8]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-[#00081B] border ${item.accentColor} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition Bridge to Solution */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#080A45] via-[#0878E8]/20 to-[#080A45] border border-[#0878E8]/40 text-white font-bold text-lg">
            <span>É aqui que entra a</span>
            <span className="text-[#00D2FF] font-heading font-extrabold tracking-wider">NELBANZ.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
