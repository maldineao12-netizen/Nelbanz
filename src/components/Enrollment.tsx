"use client";

import { upcomingBatchesData, UpcomingBatch } from "@/data/courses";
import { siteConfig } from "@/data/siteData";
import { Calendar, MapPin, MessageSquare, AlertCircle, Clock } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function Enrollment() {
  const handleReserveBatch = (batch: UpcomingBatch) => {
    trackEvent("click_reserve_batch", { batch_id: batch.id, course_title: batch.courseTitle });
    const msg = `Olá! Gostaria de reservar vaga na formação "${batch.courseTitle}" com início a ${batch.startDate} em Luanda.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section className="py-20 bg-[#080A45]/40 border-y border-[#1E295D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#00D2FF]" />
            PRÓXIMAS TURMAS PRESENCIAIS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            A PRÓXIMA TURMA PODE SER O TEU PRÓXIMO PASSO.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Garante o teu lugar no laboratório presencial em Luanda. As vagas são limitadas a 6 alunos por turma para garantir o máximo acompanhamento prático.
          </p>
        </div>

        {/* Schedule Info Box */}
        <div className="bg-[#0A102A] border border-[#1E295D] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-xs font-mono">
          <div className="space-y-2">
            <h4 className="text-white font-bold flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-[#00D2FF]" />
              Horários de Segunda a Sexta-Feira:
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.schedules.weekdays.map((slot, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-[#00081B] border border-[#1E295D] text-slate-200">
                  {slot}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-[#00D2FF]" />
              Horários aos Sábados:
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.schedules.saturday.map((slot, i) => (
                <span key={i} className="px-3 py-1 rounded bg-[#00081B] border border-[#1E295D] text-slate-200">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Batches Table / Grid */}
        <div className="grid grid-cols-1 gap-4">
          {upcomingBatchesData.map((batch) => (
            <div
              key={batch.id}
              className="bg-[#0A102A] border border-[#1E295D] hover:border-[#0878E8] transition-all rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30 font-bold">
                    Início: {batch.startDate}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    {batch.vacanciesLeft}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#00081B] text-slate-300 border border-[#1E295D] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#0878E8]" /> {batch.modality}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  {batch.courseTitle}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-mono text-slate-300">
                  <span>Horários: <strong className="text-white">{batch.schedule}</strong></span>
                  <span>Duração: <strong className="text-white">{batch.duration}</strong></span>
                  <span>Investimento: <strong className="text-emerald-400 font-bold">{batch.investment}</strong></span>
                </div>
              </div>

              <button
                onClick={() => handleReserveBatch(batch)}
                className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue"
              >
                <MessageSquare className="w-4 h-4" />
                <span>RESERVAR MINHA VAGA</span>
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono text-center">
          <AlertCircle className="w-4 h-4 text-[#00D2FF]" />
          <span>Atendimento presencial e suporte de inscrições no Bairro Azul (perto do cine Tivoli), Luanda.</span>
        </div>

      </div>
    </section>
  );
}
