// Global Site & Company Information
export const siteConfig = {
  name: "NELBANZ – Academia Tecnológica",
  shortName: "NELBANZ",
  slogan: "APRENDE. PRATICA. EVOLUI.",
  location: "Luanda, Angola",
  fullAddress: "Zamba 2 - Bairro Azul, perto do cine Tivoli, casa nº 106, Luanda, Angola",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126168.04938676228!2d13.181822!3d-8.838333!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cf82329e7%3A0x8cf6621919864278!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2sao!4v1710000000000!5m2!1spt-PT!2sao",

  phone: "+244 950 502 332",
  whatsappNumber: "244950502332",
  whatsappDefaultMessage: "Olá, NELBANZ! Gostaria de saber qual formação é mais adequada para o meu objetivo.",
  email: "nelbanzti@gmail.com",
  workingHours: "Segunda a Sexta: 08h00 - 21h30 | Sábado: 09h00 - 17h00",

  schedules: {
    weekdays: [
      "08h00 - 09h30",
      "10h00 - 11h30",
      "12h00 - 13h30",
      "14h00 - 15h30",
      "16h00 - 17h30",
      "18h00 - 19h30",
      "20h00 - 21h30"
    ],
    saturday: [
      "Manhã: 09h00 - 13h00",
      "Tarde: 13h00 - 17h00"
    ]
  },

  socialLinks: {
    x: "https://x.com/NELBANZ_ao",
    facebook: "https://www.facebook.com/nelbanzao",
    instagram: "https://www.instagram.com/nelbanz_ao/",
    linkedin: "https://www.linkedin.com/in/nelbanz-consultoria-tecnol%C3%B3gica-51b535299/"
  },

  // Real Instructors Data
  instructors: [
    {
      id: "nelson-feliciano",
      name: "Nelson Feliciano",
      role: "Especialista em Redes & CCNA",
      bio: "Formador principal das formações de CCNA 1, 2 e 3, Redes de Computadores e Helpdesk. Com mais de 10 anos de experiência prática na liderança de projetos de infraestrutura de TI.",
      image: "/images/nelson-feliciano-full.jpg",
      badge: "Formador Sénior",
      specialties: ["CCNAv7", "Routing & Switching", "Helpdesk", "Cisco Networks"]
    },
    {
      id: "elton-manuel",
      name: "Elton Manuel",
      role: "Formador de Inglês Técnico para TI",
      bio: "Especialista no ensino de língua inglesa aplicada ao ambiente corporativo de tecnologia. Possui 7 anos de experiência a capacitar profissionais de TI para documentação e certificações internacionais.",
      image: "/images/elton-manuel.jpg",
      badge: "Inglês Técnico",
      specialties: ["Technical English", "IT Documentation", "Vocabulário Técnico"]
    },
    {
      id: "evaristo-ambriz",
      name: "Evaristo Ambriz",
      role: "Especialista em Cybersecurity",
      bio: "Especialista em segurança da informação, focado em proteção de infraestruturas críticas, simulação de vulnerabilidades e testes de invasão orientados ao mercado corporativo.",
      image: "/images/evaristo-ambriz.jpg",
      badge: "Cybersecurity",
      specialties: ["Análise de Vulnerabilidade", "Proteção de Redes", "Ethical Hacking"]
    },
    {
      id: "henrique-vieira",
      name: "Henrique Vieira",
      role: "Formador Técnico em Infraestrutura",
      bio: "Com 5 anos de experiência na capacitação e suporte de infraestruturas de TI, apoia os alunos na consolidação de conceitos fundamentais e práticas de bancada.",
      image: "/images/lab-photo.jpg",
      badge: "Sistemas & Suporte",
      specialties: ["Hardware", "Sistemas Operativos", "Bancada Prática"]
    }
  ],

  // Real Testimonials Data
  testimonials: [
    {
      id: "manuel-agostinho",
      name: "Manuel Agostinho",
      course: "Redes de Computadores & CCNA",
      quote: "Antes da NELBANZ eu só entendia a teoria dos livros. No laboratório configurei routers e switches reais, o que me deu total segurança para ingressar no mercado de TI.",
      image: "/images/turma-passada-1.jpg"
    },
    {
      id: "jose-afonso",
      name: "José Afonso",
      course: "Helpdesk & Suporte Técnico",
      quote: "Nunca tinha mexido profissionalmente em TI. A didática prática e o apoio do formador fizeram toda a diferença. Hoje resolvo problemas com autonomia.",
      image: "/images/turma-passada-2.jpg"
    },
    {
      id: "carla-antonio",
      name: "Carla António",
      course: "Administração de Servidores",
      quote: "A parte prática com Windows Server e Active Directory foi excelente. Aprendi a simular cenários de empresas reais de Luanda com cenários práticos do dia a dia.",
      image: "/images/lab-classroom-view.jpg"
    }
  ],

  // Lab Showcase Photos
  labPhotos: [
    {
      title: "Laboratório de Redes e Infraestrutura",
      description: "Equipamentos e topologias configuradas diretamente pelos alunos em aulas presenciais.",
      src: "/images/turma-passada-2.jpg"
    },
    {
      title: "Turmas Presenciais Interativas",
      description: "Formações focadas no trabalho de equipa e na aplicação direta em bancada.",
      src: "/images/turma-passada-1.jpg"
    },
    {
      title: "Prática Dirigida de Bancada",
      description: "Montagem, diagnósticos de hardware e configuração de switches e roteadores.",
      src: "/images/lab-students-work.jpg"
    },
    {
      title: "Salas Climatizadas e Estações Individuais",
      description: "Ambiente moderno focado no rendimento técnico com monitores dedicados e servidores virtuais.",
      src: "/images/lab-classroom-view.jpg"
    }
  ],

  // Dynamic Metrics
  stats: [
    { label: "Alunos Formados", value: "250+", description: "Profissionais e estudantes capacitados" },
    { label: "Turmas Realizadas", value: "30+", description: "Ciclos de formação concluídos" },
    { label: "Horas de Prática em Lab", value: "1200+", description: "Experiência de aprendizagem real" },
    { label: "Áreas de Formação", value: "9", description: "Especialidades tecnológicas integradas" },
  ],

  trustBadges: [
    "FORMAÇÃO ORIENTADA À PRÁTICA",
    "PROFESSORES COM EXPERIÊNCIA TÉCNICA",
    "AMBIENTE DE APRENDIZAGEM",
    "CERTIFICADO DE CONCLUSÃO",
    "ATENDIMENTO EM LUANDA"
  ]
};

export const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Formações", href: "#cursos" },
  { name: "Percursos", href: "#percursos" },
  { name: "Metodologia", href: "#metodologia" },
  { name: "Laboratório", href: "#laboratorio" },
  { name: "Sobre nós", href: "#sobre" },
  { name: "FAQ", href: "#faq" },
  { name: "Contactos", href: "#contactos" },
];
