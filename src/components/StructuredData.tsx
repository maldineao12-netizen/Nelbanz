import { siteConfig } from "@/data/siteData";
import { coursesData } from "@/data/courses";
import { faqsData } from "@/data/faqs";

export default function StructuredData() {
  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": siteConfig.name,
    "alternateName": siteConfig.shortName,
    "description": "Academia de formação tecnológica presencial em Luanda, Angola. Cursos práticos de Redes, CCNA, Helpdesk, Servidores, Cibersegurança e Programação.",
    "url": "https://nelbanz.ao",
    "logo": "https://nelbanz.ao/images/nelbanz-logo-original.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    },
    "telephone": siteConfig.phone,
    "sameAs": [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.linkedin
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": "https://nelbanz.ao/images/nelbanz-logo-original.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    },
    "priceRange": "$$",
    "telephone": siteConfig.phone
  };

  const coursesSchema = coursesData.map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.shortDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": siteConfig.name
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
