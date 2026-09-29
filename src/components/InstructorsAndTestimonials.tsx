"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteData";
import { instructorsData, testimonialsData } from "@/data/courses";
import { UserCheck, Linkedin, Quote, Award } from "lucide-react";

export default function InstructorsAndTestimonials() {
  return (
    <div className="space-y-20">

      {/* 10. SOBRE A NELBANZ */}
      <section id="sobre" className="py-16 bg-[#080A45]/30 border-y border-[#1E295D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30">
                A NOSSA IDENTIDADE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                UMA ACADEMIA CONSTRUÍDA PARA A PRÁTICA.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                "A tecnologia muda rapidamente. Por isso, aprender apenas conceitos não chega. A nossa proposta é criar um ambiente onde o aluno compreenda os fundamentos, pratique e desenvolva confiança para continuar a evoluir."
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs text-slate-300">
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D]">
                  ✔ Aulas presenciais em Luanda
                </div>
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D]">
                  ✔ Equipamentos reais e bancadas
                </div>
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D]">
                  ✔ Orientação de formadores técnicos
                </div>
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D]">
                  ✔ Foco em competências de mercado
                </div>
              </div>
            </div>

            {/* Placeholder Frame for Lab Photos */}
            <div className="lg:col-span-5 bg-[#0A102A] border border-[#1E295D] rounded-2xl p-8 text-center space-y-4 glow-blue">
              <div className="w-16 h-16 rounded-2xl bg-[#080A45] text-[#00D2FF] mx-auto flex items-center justify-center border border-[#0878E8]/40">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                INSTALAÇÕES E EQUIPAMENTOS
              </h3>
              <p className="text-slate-400 text-xs font-mono">
                [ESPAÇO RESERVADO PARA FOTOGRAFIAS REAIS DAS AULAS, ALUNOS E COMPUTADORES EM LUANDA]
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 20. PROFESSORES / FORMADORES */}
      <section className="py-10 bg-[#00081B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
              EQUIPA TÉCNICA
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              FORMADORES COM EXPERIÊNCIA PRÁTICA
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Aprende com profissionais atuantes no mercado tecnológico de Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructorsData.map((inst, idx) => (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0A102A] rounded-2xl border border-[#1E295D] p-6 text-center space-y-4 hover:border-[#0878E8] transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-[#00081B] border-2 border-[#0878E8] mx-auto flex items-center justify-center text-xs font-mono text-slate-400 p-2">
                  {inst.photoPlaceholder}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {inst.name}
                  </h3>
                  <span className="text-xs font-mono text-[#00D2FF] block mt-1">
                    {inst.role}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {inst.experience}
                </p>
                {inst.linkedinUrl && (
                  <a
                    href={inst.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-[#0878E8] font-mono pt-2"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Perfil Profissional</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 21. PROVA SOCIAL & 22. RESULTADOS / NÚMEROS */}
      <section className="py-16 bg-[#080A45]/20 border-y border-[#1E295D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Testimonials */}
          <div>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-[#00D2FF]" />
                PROVA SOCIAL
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                QUEM PASSOU PELA NELBANZ PODE CONTAR MELHOR.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsData.map((t) => (
                <div key={t.id} className="bg-[#0A102A] p-6 rounded-2xl border border-[#1E295D] space-y-4 flex flex-col justify-between">
                  <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1E295D]">
                    <div className="w-10 h-10 rounded-full bg-[#00081B] border border-[#0878E8] flex items-center justify-center text-[9px] font-mono text-slate-400 text-center">
                      Foto
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">{t.studentName}</h4>
                      <span className="text-[11px] font-mono text-[#00D2FF] block">{t.courseTaken}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Editable Bar */}
          <div className="bg-[#0A102A] border border-[#1E295D] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center glow-blue">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-heading font-extrabold text-3xl sm:text-5xl text-[#00D2FF]">
                  {stat.value}
                </div>
                <div className="font-bold text-sm text-white">{stat.label}</div>
                <div className="text-[11px] font-mono text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
