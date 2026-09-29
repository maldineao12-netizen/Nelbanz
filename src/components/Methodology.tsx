"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle, Code, ShieldCheck, Cpu, Terminal, RefreshCw } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      num: "01",
      title: "CONCEITO",
      subtitle: "Base Teórica Direta",
      desc: "Compreensão clara dos fundamentos essenciais sem rodeios desnecessários.",
      icon: Code
    },
    {
      num: "02",
      title: "DEMONSTRAÇÃO",
      subtitle: "Exemplo pelo Formador",
      desc: "O instrutor executa e explica a resolução técnica em tempo real.",
      icon: Terminal
    },
    {
      num: "03",
      title: "PRÁTICA",
      subtitle: "Execução no Laboratório",
      desc: "O aluno repete a atividade prática com os seus próprios comandos e bancada.",
      icon: Cpu
    },
    {
      num: "04",
      title: "DESAFIO",
      subtitle: "Cenários de Resolução",
      desc: "Simulação de avarias reais para testar a capacidade de diagnóstico.",
      icon: RefreshCw
    },
    {
      num: "05",
      title: "PROJETO",
      subtitle: "Aplicação Integrada",
      desc: "Construção de uma solução completa do início ao fim (Topologia / Servidor).",
      icon: CheckCircle
    },
    {
      num: "06",
      title: "FEEDBACK",
      subtitle: "Acompanhamento Técnico",
      desc: "Revisão rigorosa do trabalho com orientações personalizadas para melhoria.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-[#00081B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30">
            PASSO A PASSO
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            NÃO QUEREMOS APENAS QUE ENTENDAS.<br />
            <span className="text-[#0878E8]">QUEREMOS QUE CONSIGAS FAZER.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A nossa metodologia em 6 etapas garante que o conhecimento é imediatamente transformado em prática consciente.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0A102A] rounded-2xl border border-[#1E295D] p-6 relative flex flex-col justify-between hover:border-[#0878E8] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-[#00D2FF]">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#080A45] text-[#0878E8] border border-[#1E295D] group-hover:text-white group-hover:bg-[#0878E8] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-[#00D2FF] block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center pt-4 text-slate-600">
                    <ArrowDown className="w-4 h-4 text-[#0878E8]" />
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
