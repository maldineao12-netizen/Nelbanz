"use client";

import { useEffect } from "react";
import { Course } from "@/data/courses";
import { X, CheckCircle2, Cpu, Calendar, Clock, MapPin, DollarSign, Users, MessageSquare } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (course) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const handleEnrollClick = () => {
    trackEvent("click_course_whatsapp_modal", { course_id: course.id, course_title: course.title });
    const msg = `Olá, NELBANZ! Tenho interesse no curso "${course.title}". Gostaria de receber informações sobre vagas, horário e inscrição.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A102A] border border-[#1E295D] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#1E295D] flex items-center justify-between bg-[#080A45]/80">
          <div>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#0878E8]/20 text-[#00D2FF] border border-[#0878E8]/30">
              {course.category} • {course.level}
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-2">
              {course.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#00081B] text-slate-400 hover:text-white border border-[#1E295D] hover:border-[#0878E8] transition-colors"
            aria-label="Fechar Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">

          {/* Quick Meta Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#00081B] border border-[#1E295D] text-xs font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0878E8]" />
              <div>
                <span className="text-slate-400 block text-[10px]">DURAÇÃO:</span>
                <span className="font-bold text-white">{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00D2FF]" />
              <div>
                <span className="text-slate-400 block text-[10px]">PRÁTICA:</span>
                <span className="font-bold text-white">{course.practiceRatio}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0878E8]" />
              <div>
                <span className="text-slate-400 block text-[10px]">LOCALIZAÇÃO:</span>
                <span className="font-bold text-white">{course.format}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">PRÓXIMA TURMA:</span>
                <span className="font-bold text-emerald-400">{course.nextBatchDate}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">INVESTIMENTO:</span>
                <span className="font-bold text-amber-300">{course.investment}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00D2FF]" />
              <div>
                <span className="text-slate-400 block text-[10px]">VAGAS:</span>
                <span className="font-bold text-white">{course.vacancies}</span>
              </div>
            </div>
          </div>

          {/* O QUE VAIS APRENDER */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0878E8]" />
              O QUE VAIS APRENDER
            </h3>
            <ul className="space-y-2">
              {course.whatYouWillLearn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0878E8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O QUE VAIS PRATICAR */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
              O QUE VAIS PRATICAR EM LABORATÓRIO
            </h3>
            <ul className="space-y-2">
              {course.whatYouWillPractice.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Cpu className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PARA QUEM É */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              PARA QUEM É ESTA FORMAÇÃO
            </h3>
            <ul className="space-y-2">
              {course.forWho.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="text-[#00D2FF] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 border-t border-[#1E295D] bg-[#080A45]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Horário: <span className="text-slate-200 font-semibold">{course.schedule}</span>
          </div>
          <button
            onClick={handleEnrollClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue"
          >
            <MessageSquare className="w-4 h-4" />
            <span>QUERO RECEBER INFORMAÇÕES (WHATSAPP)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
