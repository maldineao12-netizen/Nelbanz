"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig, navLinks } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#00081B] border-t border-[#1E295D] text-slate-300 pt-16 pb-24 md:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E295D]">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#080A45] p-1 border border-[#0878E8]/40">
                <Image
                  src="/images/nelbanz-logo-original.jpg"
                  alt="NELBANZ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  NEL<span className="text-[#0878E8]">BANZ</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold font-mono">
                  ACADEMIA TECNOLÓGICA
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Formação tecnológica presencial em Luanda. Aprende, pratica e desenvolve competências com foco no mercado de trabalho de TI.
            </p>

            <div className="font-mono text-xs text-[#00D2FF] font-bold">
              {siteConfig.slogan}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#0A102A] border border-[#1E295D] hover:border-[#0878E8] text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#0A102A] border border-[#1E295D] hover:border-[#0878E8] text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[#0A102A] border border-[#1E295D] hover:border-[#0878E8] text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              NAVEGAÇÃO
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#0878E8] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details & Local SEO */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              CONTACTOS & LOCALIZAÇÃO
            </h3>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0878E8] shrink-0 mt-0.5" />
                <span>{siteConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0878E8] shrink-0" />
                <span>Telefone: {siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="hover:underline text-[#00D2FF]">
                  WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0878E8] shrink-0" />
                <span>Email: {siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0878E8] shrink-0" />
                <span>Horários: {siteConfig.workingHours}</span>
              </div>
            </div>

            {/* Google Maps Embed Placeholder/Iframe */}
            <div className="w-full h-24 rounded-xl overflow-hidden border border-[#1E295D] relative mt-2">
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NELBANZ Location Map"
              />
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </div>
          <div>
            Luanda, Angola • Academia de Formação Tecnológica
          </div>
        </div>

      </div>
    </footer>
  );
}
