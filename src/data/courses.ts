export interface Course {
  id: string;
  title: string;
  category: "Iniciantes" | "Infraestrutura" | "Sistemas" | "Especialização";
  level: "Iniciante" | "Intermédio" | "Avançado" | "Todos os Níveis";
  duration: string;
  format: "Presencial (Luanda)";
  practiceRatio: string;
  nextBatchDate: string;
  schedule: string;
  investment: string;
  vacancies: string;
  shortDescription: string;
  whatYouWillLearn: string[];
  whatYouWillPractice: string[];
  forWho: string[];
  isFeatured?: boolean;
}

export const coursesData: Course[] = [
  {
    id: "helpdesk-suporte",
    title: "Helpdesk & Suporte Técnico de TI",
    category: "Iniciantes",
    level: "Iniciante",
    duration: "4 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "85% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Sábados das 09h às 13h / Pós-Laboral",
    investment: "50.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Domina a resolução de problemas em hardware, sistemas operativos, diagnóstico e atendimento técnico profissional.",
    whatYouWillLearn: [
      "Montagem, manutenção e diagnóstico de computadores",
      "Instalação e configuração avançada de Windows e Linux",
      "Resolução de falhas comuns de rede local (LAN)",
      "Atendimento ao utilizador e gestão de chamados (Ticketing System)",
      "Segurança da informação básica no posto de trabalho"
    ],
    whatYouWillPractice: [
      "Diagnóstico e substituição de componentes reais",
      "Configuração de estações de trabalho do zero",
      "Simulação de atendimento de helpdesk sob pressão"
    ],
    forWho: [
      "Pessoas que querem entrar na área de Tecnologia da Informação",
      "Estudantes que procuram o primeiro emprego em TI",
      "Técnicos informáticos sem formação estruturada"
    ],
    isFeatured: true
  },
  {
    id: "redes-computadores",
    title: "Redes de Computadores Essencial",
    category: "Infraestrutura",
    level: "Iniciante",
    duration: "6 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "80% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Sábados ou Pós-Laboral",
    investment: "80.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Aprende os fundamentos de redes, endereçamento IP, cablagem estruturada, routers e switches na prática.",
    whatYouWillLearn: [
      "Modelo OSI e Arquitetura TCP/IP na prática",
      "Endereçamento IPv4 e IPv6, Sub-roteamento e VLSM",
      "Conceção e crimpagem de cabos de rede (Cablagem Estruturada)",
      "Configuração de routers e switches básicos",
      "Diagnóstico de problemas de conectividade com comandos CLI"
    ],
    whatYouWillPractice: [
      "Montagem de rack de rede e crimpagem de painéis de patch",
      "Configuração de routers e conectividade WAN/LAN em bancada",
      "Análise de tráfego de rede com ferramentas de diagnóstico"
    ],
    forWho: [
      "Iniciantes em redes e infraestrutura",
      "Técnicos de suporte que querem evoluir para infraestrutura",
      "Profissionais interessados em preparar-se para CCNA"
    ],
    isFeatured: true
  },
  {
    id: "ccna-cisco",
    title: "CCNA - Routing & Switching Avançado",
    category: "Infraestrutura",
    level: "Intermédio",
    duration: "10 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "80% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Sábados das 08h30 às 13h30",
    investment: "150.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Formação aprofundada em topologias Cisco, VLANs, OSPF, STP, ACLs e conceitos de automação de rede.",
    whatYouWillLearn: [
      "Configuração avançada de Cisco IOS (Switches e Routers)",
      "VLANs, Trunking 802.1Q, Inter-VLAN Routing e Spanning Tree (STP)",
      "Protocolos de Encaminhamento Dinâmico (OSPF single e multi-area)",
      "Listas de Controlo de Acesso (ACLs) e NAT/PAT",
      "Fundamentos de Segurança de Rede e Automação de Infraestrutura"
    ],
    whatYouWillPractice: [
      "Criação e simulação de topologias empresariais complexas",
      "Troubleshooting em equipamentos reais Cisco e Packet Tracer",
      "Implementação de políticas de segurança em routers empresariais"
    ],
    forWho: [
      "Administradores de rede em início de carreira",
      "Técnicos que pretendem a certificação Cisco CCNA",
      "Profissionais de TI que gerem redes corporativas"
    ],
    isFeatured: true
  },
  {
    id: "administracao-servidores",
    title: "Administração de Servidores Windows & Linux",
    category: "Sistemas",
    level: "Intermédio",
    duration: "8 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "85% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Pós-Laboral / Fim de Semana",
    investment: "120.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Gere utilizadores, Active Directory, DNS, DHCP, virtualização e servidores corporativos Linux/Windows.",
    whatYouWillLearn: [
      "Instalação e gestão do Windows Server e Linux Ubuntu/RedHat",
      "Active Directory Domain Services (AD DS) e Group Policy Objects (GPO)",
      "Serviços essenciais: DNS, DHCP, File Server e Print Server",
      "Virtualização de servidores com Hyper-V e VMware Pro",
      "Gestão de backups, permissões e scripts de automação"
    ],
    whatYouWillPractice: [
      "Implementação do zero de um domínio empresarial completo",
      "Configuração de politicas de segurança e utilizadores corporativos",
      "Recuperação de desastres e restauração de cópias de segurança"
    ],
    forWho: [
      "Técnicos de sistemas e suporte técnico",
      "Administradores de TI que procuram consolidação de competências",
      "Estudantes que querem dominar ambientes de data center"
    ],
    isFeatured: true
  },
  {
    id: "sistemas-infraestrutura",
    title: "Sistemas & Infraestrutura Tecnológica",
    category: "Sistemas",
    level: "Intermédio",
    duration: "6 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "75% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Sábados / Pós-laboral",
    investment: "110.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Compreenda arquitetura de sistemas empresariais, alta disponibilidade, storage e monitorização de redes.",
    whatYouWillLearn: [
      "Arquitetura de alta disponibilidade e tolerância a falhas",
      "Sistemas de Armazenamento (SAN, NAS, RAID)",
      "Monitorização de infraestrutura com Zabbix / Grafana",
      "Conceitos de Cloud Computing e infraestrutura híbrida",
      "Planos de Continuidade de Negócio e Disaster Recovery"
    ],
    whatYouWillPractice: [
      "Configuração de arranjos RAID e storage de rede",
      "Criação de dashboards de monitorização de servidores em tempo real",
      "Simulação de falhas críticas e recuperação de serviços"
    ],
    forWho: [
      "Profissionais de infraestrutura que pretendem visão holística de sistemas",
      "Gerentes e coordenadores de TI em crescimento"
    ],
    isFeatured: false
  },
  {
    id: "seguranca-cybersecurity",
    title: "Fundamentos de Segurança & Cybersecurity",
    category: "Especialização",
    level: "Intermédio",
    duration: "6 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "80% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Pós-Laboral",
    investment: "90.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Protege redes e sistemas corporativos contra vulnerabilidades, malware, ataques e falhas humanas.",
    whatYouWillLearn: [
      "Princípios de Segurança da Informação (CIA Triad)",
      "Análise de vulnerabilidades e Hardening de sistemas",
      "Firewalls, IDS/IPS e VPNs corporativas",
      "Engenharia social, Phishing e boas práticas de sensibilização",
      "Introdução à Forense Digital e resposta a incidentes"
    ],
    whatYouWillPractice: [
      "Auditoria de segurança em ambiente isolado (Sandboxing)",
      "Configuração de firewalls de próxima geração (NGFW)",
      "Simulação de ataques e implementação de contramedidas"
    ],
    forWho: [
      "Administradores de rede e sistemas",
      "Técnicos que querem especializar-se na área de cibersegurança",
      "Entusiastas da área de segurança de informação"
    ],
    isFeatured: true
  },
  {
    id: "programacao-algoritmos",
    title: "Programação & Lógica de Algoritmos",
    category: "Especialização",
    level: "Iniciante",
    duration: "8 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "90% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Sábados / Pós-laboral",
    investment: "100.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Aprende a pensar como um programador, desenvolvendo lógica estruturada e projetos reais com Python.",
    whatYouWillLearn: [
      "Lógica de programação, variáveis e estruturas de controlo",
      "Funções, estruturas de dados (Listas, Dicionários)",
      "Programação Orientada a Objetos (POO)",
      "Manipulação de ficheiros e automação de tarefas diárias",
      "Boas práticas de código e controlo de versões com Git"
    ],
    whatYouWillPractice: [
      "Desenvolvimento de scripts de automação para tarefas de TI",
      "Criação de miniprojetos práticos do mundo real",
      "Publicação de repositórios no GitHub"
    ],
    forWho: [
      "Pessoas sem qualquer experiência prévia em código",
      "Profissionais de TI que pretendem automatizar rotinas",
      "Estudantes universitários de ciência da computação"
    ],
    isFeatured: false
  },
  {
    id: "bases-de-dados",
    title: "Gestão & Modelação de Bases de Dados SQL",
    category: "Especialização",
    level: "Iniciante",
    duration: "6 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "85% Prática em Lab",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Sábados / Pós-laboral",
    investment: "70.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Aprende a modelar, criar e consultar bases de dados relacionais MySQL e PostgreSQL com rigor.",
    whatYouWillLearn: [
      "Modelação relacional e Diagramas Entidade-Relação (DER)",
      "Linguagem SQL (DDL, DML, DQL): SELECT, INSERT, UPDATE, DELETE",
      "Consultas avançadas, JOINs, Agrupamentos e Subqueries",
      "Indexação, otimização e cópias de segurança (Backup/Restore)",
      "Integridade de dados e transações (ACID)"
    ],
    whatYouWillPractice: [
      "Criação de um sistema de base de dados para uma empresa local",
      "Otimização de consultas lentas em bases de dados de teste",
      "Execução de rotinas automáticas de backup de dados"
    ],
    forWho: [
      "Desenvolvedores iniciantes e analistas de dados",
      "Técnicos de suporte que trabalham com sistemas de gestão",
      "Estudantes de gestão de informação"
    ],
    isFeatured: false
  },
  {
    id: "ingles-tecnico-ti",
    title: "Inglês Técnico para Profissionais de TI",
    category: "Especialização",
    level: "Todos os Níveis",
    duration: "6 Semanas",
    format: "Presencial (Luanda)",
    practiceRatio: "70% Prática Interativa",
    nextBatchDate: "18 de Outubro de 2026",
    schedule: "Pós-Laboral / Sábados",
    investment: "40.000 Kz",
    vacancies: "6 Vagas por Turma",
    shortDescription: "Domina a terminologia técnica em inglês, documentação oficial, manuais de redes e entrevistas de emprego.",
    whatYouWillLearn: [
      "Vocabulário técnico essencial em Redes, Hardware e Software",
      "Leitura fluida de documentação técnica oficial (Cisco, Microsoft, Linux)",
      "Comunicação técnica escrita em tickets e relatórios",
      "Preparação para entrevistas de emprego na área de tecnologia",
      "Interpretação rápida de mensagens de erro e logs de sistemas"
    ],
    whatYouWillPractice: [
      "Simulação de reuniões técnicas e chamadas de suporte em inglês",
      "Tradução e aplicação de tutoriais oficiais de tecnologia",
      "Elaboração de currículo técnico em inglês"
    ],
    forWho: [
      "Profissionais de TI que pretendem trabalhar com clientes multinacionais",
      "Estudantes que querem compreender certificações internacionais em inglês"
    ],
    isFeatured: false
  }
];

export interface LearningPath {
  id: string;
  number: string;
  title: string;
  targetAudience: string;
  description: string;
  coursesIncluded: string[];
  ctaText: string;
}

export const learningPathsData: LearningPath[] = [
  {
    id: "path-1",
    number: "01",
    title: "COMEÇAR EM TI",
    targetAudience: "Para iniciantes sem experiência prévia",
    description: "Ideal para quem quer dar o primeiro passo profissional na tecnologia com segurança, dominando hardware, redes e suporte.",
    coursesIncluded: ["Helpdesk & Suporte Técnico", "Redes de Computadores Essencial", "Inglês Técnico para TI"],
    ctaText: "COMEÇAR AGORA"
  },
  {
    id: "path-2",
    number: "02",
    title: "INFRAESTRUTURA & REDES",
    targetAudience: "Para quem quer trabalhar com redes corporativas",
    description: "Especialização focada na arquitetura, encaminhamento, comutação de redes e certificações internacionais.",
    coursesIncluded: ["Redes de Computadores Essencial", "CCNA - Routing & Switching Avançado", "Segurança & Cybersecurity"],
    ctaText: "EXPLORAR PERCURSO"
  },
  {
    id: "path-3",
    number: "03",
    title: "SISTEMAS & SERVIDORES",
    targetAudience: "Para quem quer aprofundar administração de sistemas",
    description: "Capacitação para gerir centros de dados, servidores corporativos Windows/Linux, virtualização e alta disponibilidade.",
    coursesIncluded: ["Administração de Servidores", "Sistemas & Infraestrutura", "Bases de Dados SQL"],
    ctaText: "EXPLORAR PERCURSO"
  },
  {
    id: "path-4",
    number: "04",
    title: "TECNOLOGIA & ESPECIALIZAÇÃO",
    targetAudience: "Para quem procura desenvolvimento e diferenciação",
    description: "Para profissionais que querem expandir para programação, cibersegurança e automação de processos tecnológicos.",
    coursesIncluded: ["Programação & Lógica de Algoritmos", "Segurança & Cybersecurity", "Bases de Dados SQL"],
    ctaText: "EXPLORAR ESPECIALIZAÇÃO"
  }
];

export interface PracticalProject {
  id: string;
  title: string;
  category: string;
  objective: string;
  technologies: string[];
  result: string;
  imagePlaceholderText: string;
}

export const practicalProjectsData: PracticalProject[] = [
  {
    id: "proj-1",
    title: "Topologia de Rede Corporativa Completa",
    category: "Redes & CCNA",
    objective: "Projetar e configurar a infraestrutura de rede para uma empresa com 3 filiais interconnectadas.",
    technologies: ["Cisco Routers", "Switches L2/L3", "OSPF", "VLANs", "ACLs"],
    result: "Comunicação segura entre filiais com redundância de links e isolamento de tráfego administrativo.",
    imagePlaceholderText: "[FOTO REAL / TOPOLOGIA DE REDE NO LAB]"
  },
  {
    id: "proj-2",
    title: "Configuração de Servidor de Domínio & Virtualização",
    category: "Sistemas & Servidores",
    objective: "Implementar um servidor central com Active Directory, políticas de grupo e serviços de ficheiros.",
    technologies: ["Windows Server", "Active Directory", "DNS", "DHCP", "Hyper-V"],
    result: "Ambiente empresarial com controlo centralizado de acessos, cópias automáticas e permissões por departamento.",
    imagePlaceholderText: "[FOTO REAL / SERVIDORES E RACK NO LAB]"
  },
  {
    id: "proj-3",
    title: "Laboratório de Segurança & Firewall Empresarial",
    category: "Cybersecurity",
    objective: "Simular ataques de rede e implementar regras de firewall para proteger o tráfego corporativo.",
    technologies: ["pfSense", "Wireshark", "Firewall Rules", "VPN IPSec", "IDS/IPS"],
    result: "Relatório de auditoria de vulnerabilidades resolvido com bloqueio ativo de ameaças externas.",
    imagePlaceholderText: "[FOTO REAL / PAINEL DE MONITORIZAÇÃO E FIREWALL]"
  },
  {
    id: "proj-4",
    title: "Projeto de Programação & Automação de Tarefas",
    category: "Programação & Automação",
    objective: "Desenvolver um script para automatizar a verificação do estado dos servidores e envio de alertas.",
    technologies: ["Python", "Git", "REST APIs", "SQL", "Linux Bash"],
    result: "Sistema automatizado que reduz o tempo de diagnósticos de rotina de horas para poucos segundos.",
    imagePlaceholderText: "[FOTO REAL / CÓDIGO E TERMINAL DE PROGRAMAÇÃO]"
  }
];

export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  linkedinUrl?: string;
  photoPlaceholder: string;
}

export const instructorsData: Instructor[] = [
  {
    id: "inst-1",
    name: "Equipa NELBANZ",
    role: "Especialistas em Redes & CCNA",
    specialty: "Engenharia de Redes & Infraestrutura",
    experience: "Profissionais certificados com vasta experiência no mercado corporativo de Angola.",
    linkedinUrl: "https://linkedin.com/company/nelbanz",
    photoPlaceholder: "[FORMADOR DE REDES]"
  },
  {
    id: "inst-2",
    name: "Equipa NELBANZ",
    role: "Administradores de Sistemas & Cloud",
    specialty: "Windows Server, Linux e Data Centers",
    experience: "Especialistas em gestão de infraestruturas críticas e servidores corporativos.",
    linkedinUrl: "https://linkedin.com/company/nelbanz",
    photoPlaceholder: "[FORMADOR DE SISTEMAS]"
  },
  {
    id: "inst-3",
    name: "Equipa NELBANZ",
    role: "Especialistas em Cybersecurity & Suporte",
    specialty: "Segurança da Informação e Helpdesk",
    experience: "Consultores técnicos focados em auditoria de segurança e suporte TI.",
    linkedinUrl: "https://linkedin.com/company/nelbanz",
    photoPlaceholder: "[FORMADOR DE SEGURANÇA]"
  }
];

export interface Testimonial {
  id: string;
  studentName: string;
  courseTaken: string;
  currentRoleOrOutcome: string;
  quote: string;
  photoPlaceholder: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    studentName: "Aluno NELBANZ",
    courseTaken: "Curso de Redes & CCNA",
    currentRoleOrOutcome: "Técnico de Redes",
    quote: "A prática no laboratório com routers Cisco reais foi o grande diferencial para conseguir resolver problemas no meu trabalho.",
    photoPlaceholder: "[ALUNO 01]"
  },
  {
    id: "test-2",
    studentName: "Aluna NELBANZ",
    courseTaken: "Helpdesk & Suporte Técnico",
    currentRoleOrOutcome: "Técnica de Suporte TI",
    quote: "Entrei sem saber quase nada de manutenção e saí capaz de diagnosticar e reparar qualquer computador com confiança.",
    photoPlaceholder: "[ALUNO 02]"
  },
  {
    id: "test-3",
    studentName: "Aluno NELBANZ",
    courseTaken: "Administração de Servidores",
    currentRoleOrOutcome: "Administrador de Sistemas",
    quote: "As aulas de Active Directory e DNS são totalmente focadas em cenários do dia a dia das empresas em Luanda.",
    photoPlaceholder: "[ALUNO 03]"
  }
];

export interface UpcomingBatch {
  id: string;
  courseTitle: string;
  startDate: string;
  schedule: string;
  duration: string;
  modality: "Presencial em Luanda";
  investment: string;
  vacanciesLeft: string;
}

export const upcomingBatchesData: UpcomingBatch[] = [
  {
    id: "batch-1",
    courseTitle: "Helpdesk & Suporte Técnico de TI",
    startDate: "18 de Outubro de 2026",
    schedule: "Sábados (09h - 13h)",
    duration: "4 Semanas",
    modality: "Presencial em Luanda",
    investment: "50.000 Kz",
    vacanciesLeft: "6 Vagas por Turma"
  },
  {
    id: "batch-2",
    courseTitle: "Redes de Computadores Essencial",
    startDate: "18 de Outubro de 2026",
    schedule: "Sábados ou Pós-Laboral",
    duration: "6 Semanas",
    modality: "Presencial em Luanda",
    investment: "80.000 Kz",
    vacanciesLeft: "6 Vagas por Turma"
  },
  {
    id: "batch-3",
    courseTitle: "CCNA - Routing & Switching Avançado",
    startDate: "18 de Outubro de 2026",
    schedule: "Sábados (08h30 - 13h30)",
    duration: "10 Semanas",
    modality: "Presencial em Luanda",
    investment: "150.000 Kz",
    vacanciesLeft: "6 Vagas por Turma"
  },
  {
    id: "batch-4",
    courseTitle: "Administração de Servidores",
    startDate: "18 de Outubro de 2026",
    schedule: "Pós-Laboral / Fim de Semana",
    duration: "8 Semanas",
    modality: "Presencial em Luanda",
    investment: "120.000 Kz",
    vacanciesLeft: "6 Vagas por Turma"
  },
  {
    id: "batch-5",
    courseTitle: "Fundamentos de Segurança & Cybersecurity",
    startDate: "18 de Outubro de 2026",
    schedule: "Pós-Laboral",
    duration: "6 Semanas",
    modality: "Presencial em Luanda",
    investment: "90.000 Kz",
    vacanciesLeft: "6 Vagas por Turma"
  },
  {
    id: "batch-6",
    courseTitle: "Programação & Lógica de Algoritmos",
    startDate: "18 de Outubro de 2026",
    schedule: "Sábados / Pós-laboral",
    duration: "8 Semanas",
    modality: "Presencial em Luanda",
    investment: "100.000 Kz",
    vacanciesLeft: "6 Vagas por Turma"
  }
];
