"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { coursesData, Course } from "@/data/courses";
import CourseModal from "./CourseModal";
import { Clock, Cpu, Calendar, ArrowRight, Layers } from "lucide-react";
import { trackEvent } from "@/lib/whatsapp";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = ["Todos", "Iniciantes", "Infraestrutura", "Sistemas", "Especialização"];

  const filteredCourses = selectedCategory === "Todos"
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  const handleOpenCourse = (course: Course) => {
    trackEvent("view_course", { course_id: course.id, course_title: course.title });
    setSelectedCourse(course);
  };

  return (
    <section id="cursos" className="py-20 bg-[#00081B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#00D2FF]" />
            CATÁLOGO TÉCNICO
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            CURSOS EM DESTAQUE
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Formações presenciais em Luanda projetadas com foco em competências de aplicação imediata no mercado.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all font-mono ${
                selectedCategory === cat
                  ? "bg-[#0878E8] text-white shadow-lg glow-blue"
                  : "bg-[#0A102A] text-slate-400 hover:text-white border border-[#1E295D]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#0A102A] rounded-2xl border border-[#1E295D] hover:border-[#0878E8] transition-all flex flex-col justify-between overflow-hidden group glow-blue"
            >
              <div className="p-6">

                {/* Category & Level Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#080A45] text-[#00D2FF] border border-[#1E295D] font-bold uppercase">
                    {course.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#00D2FF] transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {course.shortDescription}
                </p>

                {/* Course Meta Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#1E295D] text-xs font-mono text-slate-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0878E8]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>{course.practiceRatio}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2 text-emerald-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Início: {course.nextBatchDate}</span>
                  </div>
                </div>

              </div>

              {/* Card CTA Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenCourse(course)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-[#080A45] border border-[#0878E8]/60 hover:bg-[#0878E8] transition-all group-hover:border-[#0878E8]"
                >
                  <span>VER DETALHES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Course Detailed Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}
