"use client";

import { motion } from "framer-motion";
import { practicalProjectsData } from "@/data/courses";
import { FolderGit2, Cpu, CheckCircle } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 bg-[#00081B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-[#00D2FF]" />
            RESULTADOS PRÁTICOS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            NÃO MOSTRAMOS APENAS O QUE ENSINAMOS.<br />
            <span className="text-[#0878E8]">MOSTRAMOS O QUE SE PODE CONSTRUIR.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Exemplos de projetos práticos executados pelos alunos no laboratório da NELBANZ.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practicalProjectsData.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A102A] rounded-2xl border border-[#1E295D] overflow-hidden hover:border-[#0878E8] transition-all flex flex-col justify-between group"
            >
              {/* Image Placeholder Frame */}
              <div className="h-48 bg-[#00081B] border-b border-[#1E295D] p-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#080A45]/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#080A45] border border-[#0878E8]/40 flex items-center justify-center text-[#00D2FF] mb-3">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase text-center px-4">
                  {proj.imagePlaceholderText}
                </span>
                <span className="text-[10px] font-mono text-[#00D2FF] mt-2 px-2.5 py-0.5 rounded bg-[#080A45] border border-[#1E295D]">
                  {proj.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-xl text-white">
                  {proj.title}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 font-mono block text-[11px] uppercase">OBJETIVO:</span>
                    <p className="text-slate-200">{proj.objective}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono block text-[11px] uppercase mt-2">RESULTADO:</span>
                    <p className="text-emerald-400 flex items-start gap-1.5 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {proj.result}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-[#1E295D] flex flex-wrap gap-2">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00081B] border border-[#1E295D] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
