"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Terminal, Server, ShieldCheck, Activity, Cpu } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function Hero() {
  const handleWhatsAppHero = () => {
    trackEvent("click_whatsapp", { location: "hero_cta" });
    window.open(getWhatsAppUrl("Olá! Vi a NELBANZ e gostaria de informações sobre os cursos de TI disponíveis."), "_blank");
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0878E8]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#1800A8]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080A45] border border-[#0878E8]/40 text-[#00D2FF] text-xs font-mono font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              NELBANZ • APRENDE. PRATICA. EVOLUI.
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              TRANSFORMA O TEU INTERESSE POR TECNOLOGIA EM{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0878E8] via-[#00D2FF] to-white">
                COMPETÊNCIA PROFISSIONAL.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              Formação tecnológica prática em Luanda para quem quer entrar, evoluir ou especializar-se em TI.
            </p>

            {/* Complementary Text */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Aprende com orientação, pratica em laboratório e desenvolve competências aplicáveis ao mercado.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>VER FORMAÇÕES</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                onClick={handleWhatsAppHero}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-200 bg-[#0A102A] border border-[#1E295D] hover:border-[#0878E8] hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 text-[#00D2FF]" />
                <span>FALAR NO WHATSAPP</span>
              </button>
            </div>

            {/* Microcopy */}
            <div className="pt-3 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0878E8]" />
                Turmas presenciais
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#0878E8]" />
                Formação prática
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#0878E8]" />
                Luanda
              </span>
            </div>
          </motion.div>

          {/* Right Tech Visual Composition Column (Network Lab Interface) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Tech Card Frame */}
            <div className="relative rounded-2xl bg-[#0A102A]/90 border border-[#1E295D] p-5 shadow-2xl backdrop-blur-xl glow-accent">

              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E295D]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-[#0878E8]" />
                    nelbanz-terminal://lab-console
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Lab Panel Status Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
                <div className="bg-[#00081B] p-3 rounded-lg border border-[#1E295D]">
                  <div className="text-slate-400 text-[10px] uppercase">LAB STATUS</div>
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    NETWORK LAB: ONLINE
                  </div>
                </div>

                <div className="bg-[#00081B] p-3 rounded-lg border border-[#1E295D]">
                  <div className="text-slate-400 text-[10px] uppercase">ACTIVE NODES</div>
                  <div className="text-white font-bold text-sm mt-1">
                    24 Devices Connected
                  </div>
                </div>

                <div className="bg-[#00081B] p-3 rounded-lg border border-[#1E295D]">
                  <div className="text-slate-400 text-[10px] uppercase">STUDENTS ACTIVE</div>
                  <div className="text-[#00D2FF] font-bold text-sm mt-1">
                    12 Lab Workstations
                  </div>
                </div>

                <div className="bg-[#00081B] p-3 rounded-lg border border-[#1E295D]">
                  <div className="text-slate-400 text-[10px] uppercase">PRACTICE ENVIRONMENT</div>
                  <div className="text-yellow-400 font-bold text-sm mt-1">
                    100% HANDS-ON
                  </div>
                </div>
              </div>

              {/* Simulated Terminal Log Output */}
              <div className="bg-[#00081B] rounded-lg p-3 border border-[#1E295D] font-mono text-[11px] text-slate-300 space-y-1.5">
                <p className="text-slate-500">// NELBANZ Infrastructure Practice Console</p>
                <p className="text-[#00D2FF]">&gt; connecting to router_core_luanda_01... connected.</p>
                <p className="text-slate-300">&gt; show ip ospf neighbors</p>
                <p className="text-emerald-400">&gt; Neighbor 192.168.10.1 FULL/DR (Interface GigabitEthernet0/0)</p>
                <p className="text-slate-300">&gt; active_module: [CCNA / SERVIDORES / HELPDESK]</p>
                <p className="text-amber-400">&gt; lab_task: "Configurar VLAN 20 - Servidores Corporativos"</p>
              </div>

              {/* Equipment Tags */}
              <div className="mt-4 pt-3 border-t border-[#1E295D]/60 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-1 rounded bg-[#080A45] border border-[#1E295D] flex items-center gap-1">
                  <Server className="w-3 h-3 text-[#0878E8]" /> Cisco Routers & Switches
                </span>
                <span className="px-2 py-1 rounded bg-[#080A45] border border-[#1E295D]">
                  Windows & Linux Server
                </span>
                <span className="px-2 py-1 rounded bg-[#080A45] border border-[#1E295D]">
                  Cablagem & Patch Panels
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
