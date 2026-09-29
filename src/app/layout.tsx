import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import LearningPaths from "@/components/LearningPaths";
import Courses from "@/components/Courses";
import Methodology from "@/components/Methodology";
import Lab from "@/components/Lab";
import Audience from "@/components/Audience";
import Benefits from "@/components/Benefits";
import Projects from "@/components/Projects";
import InstructorsAndTestimonials from "@/components/InstructorsAndTestimonials";
import FAQ from "@/components/FAQ";
import Enrollment from "@/components/Enrollment";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nelbanz.ao"),
  title: "NELBANZ | Academia Tecnológica em Luanda",
  description: "Formação tecnológica prática em Luanda. Redes, CCNA, Helpdesk, servidores, segurança e outras áreas de TI. Aprende. Pratica. Evolui.",
  keywords: [
    "cursos de informática em Luanda",
    "cursos de TI em Angola",
    "curso de redes em Luanda",
    "CCNA Angola",
    "curso de servidores Luanda",
    "curso de Helpdesk Angola",
    "formação tecnológica em Luanda",
    "academia de tecnologia em Angola",
    "NELBANZ"
  ],
  authors: [{ name: "NELBANZ - Academia Tecnológica" }],
  openGraph: {
    title: "NELBANZ | Academia Tecnológica em Luanda",
    description: "Formação tecnológica prática em Luanda. Redes, CCNA, Helpdesk, servidores, segurança e outras áreas de TI.",
    url: "https://nelbanz.ao",
    siteName: "NELBANZ",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "/images/nelbanz-logo-original.jpg",
        width: 800,
        height: 800,
        alt: "NELBANZ Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased bg-[#00081B] text-slate-100 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <TrustBar />
          <Problem />
          <Approach />
          <LearningPaths />
          <Courses />
          <Methodology />
          <Lab />
          <Audience />
          <Benefits />
          <Projects />
          <InstructorsAndTestimonials />
          <FAQ />
          <Enrollment />
          <LeadForm />
          <FinalCTA />
        </main>
        <Footer />
        <MobileStickyBar />
        {children}
      </body>
    </html>
  );
}
