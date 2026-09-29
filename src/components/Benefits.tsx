"use client";

import { motion } from "framer-motion";
import { Cpu, BookOpen, MonitorCheck, Users, Shield, Award, Network, Compass } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Cpu,
      title: "Formação orientada à prática",
      description: "Aulas estruturadas com foco em resolução de problemas e utilização de equipamentos reais."
    },
    {
      icon: BookOpen,
      title: "Aprendizagem estruturada",
      description: "Conteúdos organizados do básico ao avançado sem atalhos nem lacunas concetuais."
    },
    {
      icon: MonitorCheck,
      title: "Ambiente tecnológico",
      description: "Infraestrutura de laboratório presencial em Luanda pronta para ensaios práticos."
    },
    {
      icon: Users,
      title: "Acompanhamento próximo",
      description: "Formadores experientes presentes em sala para tirar dúvidas e orientar a execução."
    },
    {
      icon: Network,
      title: "Projetos aplicados",
      description: "Criação de topologias, servidores e sistemas que formam um portfólio prático."
    },
    {
      icon: Award,
      title: "Certificado de conclusão",
      description: "Documentação oficial comprovando a carga horária e competências desenvolvidas."
    },
    {
      icon: Shield,
      title: "Comunidade técnica",
      description: "Rede de contacto e partilha de conhecimento entre formadores e estudantes."
    },
    {
      icon: Compass,
      title: "Orientação de evolução",
      description: "Apoio no direcionamento para os próximos passos profissionais na área de TI."
    }
  ];

  return (
    <section className="py-20 bg-[#080A45]/20 border-y border-[#1E295D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30">
            PORQUE ESCOLHER A NELBANZ
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            BENEFÍCIOS DE ESTUDAR CONNOSCO
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Desenvolve competências relevantes para continuar a tua evolução profissional de forma consciente e consistente.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#0A102A] p-6 rounded-2xl border border-[#1E295D] hover:border-[#0878E8] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#080A45] text-[#0878E8] group-hover:bg-[#0878E8] group-hover:text-white border border-[#1E295D] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible Anti-Promise Microcopy Banner */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-xl bg-[#00081B] border border-[#1E295D] text-xs text-slate-400 font-mono">
          * A NELBANZ foca no rigor do ensino e na prática real. Não fazemos promessas ilusórias de emprego garantido; focamos na construção de competências técnicas reais que te tornem preparado para o mercado.
        </div>

      </div>
    </section>
  );
}
