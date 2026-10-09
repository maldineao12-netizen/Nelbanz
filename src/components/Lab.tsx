"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { Network, Server, Cable, Monitor, Activity, ShieldAlert, Wifi } from "lucide-react";

export default function Lab() {
  const labEquipments = [
    {
      icon: Network,
      title: "Routers & Switches Cisco",
      desc: "Equipamentos físicos e racks configuráveis para práticas de comutação, roteamento e VLANs.",
      badge: "Redes & CCNA"
    },
    {
      icon: Server,
      title: "Servidores & Storage",
      desc: "Bancadas com servidores torre e rack para instalação de Windows Server, Linux e hipervisores.",
      badge: "Sistemas & Cloud"
    },
    {
      icon: Cable,
      title: "Cablagem & Patch Panels",
      desc: "Painéis de crimpagem, testadores de cabos e organizadores de rack para infraestrutura física.",
      badge: "Hardware & Redes"
    },
    {
      icon: Monitor,
      title: "Workstations de Diagnóstico",
      desc: "Estações de trabalho preparadas com máquinas virtuais, analisadores de pacotes e ferramentas CLI.",
      badge: "Helpdesk & Suporte"
    }
  ];

  return (
    <section id="laboratorio" className="py-20 bg-[#080A45]/30 border-y border-[#1E295D] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0878E8]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#00D2FF]" />
            AMBIENTE PRESENCIAL EM LUANDA
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            A TECNOLOGIA GANHA VIDA NO LABORATÓRIO.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            "Quanto mais próximo da realidade for o ambiente de aprendizagem, maior é a oportunidade de transformar conhecimento em prática."
          </p>
        </div>

        {/* Real Lab Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.labPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A102A] border border-[#1E295D] rounded-2xl overflow-hidden hover:border-[#0878E8] transition-all group"
            >
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00081B] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00D2FF] bg-[#00081B]/80 px-2.5 py-0.5 rounded border border-[#0878E8]/40 inline-block mb-1">
                    NELBANZ • Luanda Lab
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {photo.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-mono mt-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lab Bench Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0A102A] border border-[#1E295D] rounded-3xl p-6 sm:p-10 shadow-2xl relative glow-blue"
        >
          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E295D] font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold tracking-wider">
                NELBANZ LAB BENCH • LUANDA STATION
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 text-[#0878E8]" /> Gigabit LAN Ready
              </span>
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-[#00D2FF]" /> Isolated Sandbox
              </span>
            </div>
          </div>

          {/* Interactive Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labEquipments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#00081B] p-6 rounded-2xl border border-[#1E295D] hover:border-[#00D2FF] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#080A45] border border-[#0878E8]/40 flex items-center justify-center text-[#00D2FF] mb-4 group-hover:bg-[#0878E8] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-[#00D2FF] uppercase font-bold block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Footnote */}
          <div className="mt-8 pt-6 border-t border-[#1E295D] text-center text-xs text-slate-400 font-mono">
            * Cada aluno trabalha com o seu próprio computador e postos de ensaio individuais no laboratório presencial em Luanda.
          </div>

        </motion.div>

      </div>
    </section>
  );
}
