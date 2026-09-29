"use client";

import { useState, FormEvent } from "react";
import { coursesData } from "@/data/courses";
import { Send, CheckCircle2, User, Phone, BookOpen, Target, Sparkles } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cursoInteresse: coursesData[0]?.title || "Helpdesk & Suporte Técnico de TI",
    nivelAtual: "Iniciante",
    objetivo: "Entrar em TI"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    trackEvent("lead_submit", formData);
    setSubmitted(true);

    const message = `Olá, NELBANZ!
Meu nome: ${formData.nome}
WhatsApp: ${formData.whatsapp}
Curso de Interesse: ${formData.cursoInteresse}
Nível Atual: ${formData.nivelAtual}
Objetivo: ${formData.objetivo}

Gostaria de receber orientação sobre como realizar a minha inscrição.`;

    setTimeout(() => {
      window.open(getWhatsAppUrl(message), "_blank");
    }, 600);
  };

  return (
    <section id="contactos" className="py-20 bg-[#00081B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0A102A] border border-[#1E295D] rounded-3xl p-6 sm:p-10 shadow-2xl relative glow-blue">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              ATENDIMENTO PERSONALIZADO
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              QUERO RECEBER ORIENTAÇÃO TÉCNICA
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Indica o teu objetivo e a nossa equipa em Luanda recomenda o melhor caminho sem qualquer compromisso.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                OBRIGADO, {formData.nome.toUpperCase()}!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                O teu pedido foi registado. Estamos a redirecionar-te para o WhatsApp do nosso consultor...
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-[#00D2FF] underline hover:text-white pt-2"
              >
                Preencher formulário novamente
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0878E8]" /> NOME COMPLETO *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Manuel dos Santos"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#00081B] border border-[#1E295D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0878E8] transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#0878E8]" /> WHATSAPP / TELEFONE *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 923 000 000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#00081B] border border-[#1E295D] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0878E8] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Curso de Interesse */}
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#0878E8]" /> CURSO DE INTERESSE
                  </label>
                  <select
                    value={formData.cursoInteresse}
                    onChange={(e) => setFormData({ ...formData, cursoInteresse: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#00081B] border border-[#1E295D] text-white text-sm focus:outline-none focus:border-[#0878E8] transition-colors"
                  >
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.title} className="bg-[#00081B]">
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nível Atual */}
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                    NÍVEL ATUAL EM TI
                  </label>
                  <select
                    value={formData.nivelAtual}
                    onChange={(e) => setFormData({ ...formData, nivelAtual: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#00081B] border border-[#1E295D] text-white text-sm focus:outline-none focus:border-[#0878E8] transition-colors"
                  >
                    <option value="Iniciante">Iniciante (Do zero)</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermédio">Intermédio</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                </div>

                {/* Objetivo */}
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#0878E8]" /> OBJETIVO
                  </label>
                  <select
                    value={formData.objetivo}
                    onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#00081B] border border-[#1E295D] text-white text-sm focus:outline-none focus:border-[#0878E8] transition-colors"
                  >
                    <option value="Entrar em TI">Entrar na área de TI</option>
                    <option value="Melhorar competências">Melhorar competências</option>
                    <option value="Certificação">Preparar certificação</option>
                    <option value="Evolução profissional">Evolução profissional</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-5 h-5" />
                  <span>QUERO RECEBER ORIENTAÇÃO (WHATSAPP)</span>
                </button>
              </div>

              <div className="text-center text-[11px] font-mono text-slate-400">
                🔒 Primeiro contacto totalmente gratuito e sem qualquer compromisso.
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
