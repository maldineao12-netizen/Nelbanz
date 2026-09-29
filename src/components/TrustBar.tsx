"use client";

import { siteConfig } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="bg-[#080A45]/80 border-y border-[#1E295D] py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 md:gap-8">
          {siteConfig.trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase font-mono"
            >
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
