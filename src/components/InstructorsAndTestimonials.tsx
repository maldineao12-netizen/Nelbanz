"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { UserCheck, Linkedin, Quote, Award, CheckCircle2 } from "lucide-react";

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-slate-300">
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>Aulas presenciais em Luanda</span>
                </div>
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>Equipamentos e bancadas reais</span>
                </div>
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>Formadores com experiência técnica</span>
                </div>
                <div className="p-3 bg-[#00081B] rounded-xl border border-[#1E295D] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>Turmas reduzidas (máx. 6 vagas)</span>
                </div>
              </div>
            </div>

            {/* Photo Showcase Frame */}
            <div className="lg:col-span-5 bg-[#0A102A] border border-[#1E295D] rounded-2xl p-4 sm:p-6 space-y-4 glow-blue">
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-[#1E295D]">
                <Image
                  src="/images/nelbanz-lab-banner.jpg"
                  alt="Laboratório Tecnológico da NELBANZ em Luanda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00081B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00D2FF] bg-[#00081B]/80 px-2 py-0.5 rounded border border-[#0878E8]/40">
                    Instalações Reais • Luanda
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">Laboratório de Infraestrutura NELBANZ</h4>
                </div>
              </div>
              <p className="text-slate-400 text-xs font-mono text-center">
                Ambiente preparado com switches Cisco, servidores corporativos e bancadas de teste para simulação presencial de cenários reais.
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
              EQUIPA TÉCNICA DE FORMADORES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              FORMADORES COM EXPERIÊNCIA PRÁTICA
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Aprende com especialistas atuantes no mercado tecnológico de Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.instructors.map((inst, idx) => (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0A102A] rounded-2xl border border-[#1E295D] p-6 text-center space-y-4 hover:border-[#0878E8] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative w-28 h-28 rounded-full bg-[#00081B] border-2 border-[#0878E8] mx-auto overflow-hidden shadow-lg">
                    {inst.image ? (
                      <Image
                        src={inst.image}
                        alt={inst.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl font-heading font-bold text-[#00D2FF] bg-[#080A45]">
                        {inst.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#00D2FF] bg-[#080A45] px-2 py-0.5 rounded border border-[#0878E8]/30 inline-block mb-1">
                      {inst.badge}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {inst.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-300 block mt-0.5">
                      {inst.role}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed text-left pt-2 border-t border-[#1E295D]">
                    {inst.bio}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap justify-center gap-1">
                    {inst.specialties.map((spec, i) => (
                      <span key={i} className="text-[9px] font-mono bg-[#00081B] text-slate-300 px-2 py-0.5 rounded border border-[#1E295D]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
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
              {siteConfig.testimonials.map((t) => (
                <div key={t.id} className="bg-[#0A102A] p-6 rounded-2xl border border-[#1E295D] space-y-4 flex flex-col justify-between hover:border-[#0878E8]/60 transition-all">
                  <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1E295D]">
                    <div className="relative w-12 h-12 rounded-full bg-[#00081B] border border-[#0878E8] overflow-hidden shrink-0">
                      {t.image ? (
                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-white text-xs bg-[#080A45]">
                          {t.name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">{t.name}</h4>
                      <span className="text-[11px] font-mono text-[#00D2FF] block">{t.course}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Bar */}
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
