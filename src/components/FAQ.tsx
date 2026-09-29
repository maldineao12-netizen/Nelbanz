"use client";

import { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown, HelpCircle, Search, MessageSquare } from "lucide-react";
import { getWhatsAppUrl, trackEvent } from "@/lib/whatsapp";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleAccordion = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent("faq_open", { question: faqsData[index]?.question });
    }
  };

  const filteredFaqs = faqsData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#00081B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase bg-[#080A45] px-3 py-1 rounded-full border border-[#0878E8]/30 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#00D2FF]" />
            ESCLARECIMENTO DE DÚVIDAS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Respostas diretas às principais questões sobre os cursos, laboratórios, inscrições e pagamentos.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar dúvida (ex: experiência, certificado, presencial, Luanda)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0A102A] border border-[#1E295D] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#0878E8] transition-colors"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0A102A] border border-[#1E295D] rounded-xl overflow-hidden transition-all hover:border-[#0878E8]/60"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-heading font-bold text-base sm:text-lg focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00D2FF] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-[#1E295D]/40 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-400 font-mono text-xs bg-[#0A102A] rounded-xl border border-[#1E295D]">
              Nenhuma pergunta encontrada com o termo "{searchTerm}".
            </div>
          )}
        </div>

        {/* WhatsApp FAQ Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#080A45]/60 border border-[#1E295D] space-y-3">
          <p className="text-sm text-slate-300">
            Ainda tens alguma dúvida específica que não encontraste aqui?
          </p>
          <button
            onClick={() => {
              trackEvent("click_whatsapp", { location: "faq_bottom" });
              window.open(getWhatsAppUrl("Olá! Estava a ler a FAQ no site e tenho uma dúvida adicional."), "_blank");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0878E8] hover:bg-[#0878E8]/90 transition-all glow-blue"
          >
            <MessageSquare className="w-4 h-4" />
            <span>FALAR COM A NOSSA EQUIPA (WHATSAPP)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
