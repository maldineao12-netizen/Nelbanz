"use client";

import { motion } from "framer-motion";
import { learningPathsData, LearningPath } from "@/data/courses";
import { ArrowRight, CheckCircle, Compass } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function LearningPaths() {
  const handleSelectPath = (path: LearningPath) => {
    trackEvent("select_learning_path", { path_id: path.id, path_title: path.title });
    const msg = `Olá! Gostaria de explorar o Percurso de Formação: "${path.title}". Podem orientar-me sobre as próximas turmas?`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="percursos" className="py-20 bg-[#00081B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#00D2FF]" />
            ORIENTAÇÃO DE CARREIRA
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            ESCOLHE O TEU PERCURSO
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Em vez de uma lista dispersa de cursos, organizamos a aprendizagem em caminhos estruturados de acordo com o teu objetivo.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPathsData.map((path, idx) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A102A] rounded-2xl border border-[#1E295D] p-6 flex flex-col justify-between hover:border-[#0878E8] transition-all group hover:shadow-xl"
            >
              <div>
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#080A45] text-[#00D2FF] border border-[#1E295D] font-bold">
                    PERCURSO {path.number}
                  </span>
                  <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-white transition-colors">
                    {path.number}
                  </span>
                </div>

                {/* Path Title */}
                <h3 className="font-heading font-bold text-xl text-white mb-2 tracking-wide">
                  {path.title}
                </h3>

                {/* Target Audience */}
                <p className="text-xs font-mono text-[#00D2FF] mb-4">
                  {path.targetAudience}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {path.description}
                </p>

                {/* Courses Included List */}
                <div className="space-y-2 mb-8 pt-4 border-t border-[#1E295D]">
                  <span className="text-xs font-mono text-slate-400 font-semibold block uppercase">
                    Áreas Incluídas:
                  </span>
                  {path.coursesIncluded.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0878E8] shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectPath(path)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-[#080A45] border border-[#0878E8]/50 hover:bg-[#0878E8] transition-all group-hover:border-[#0878E8]"
              >
                <span>{path.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
