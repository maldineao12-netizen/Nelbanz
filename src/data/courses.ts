export interface Course {
  id: string;
  title: string;
  category: "Iniciantes" | "Infraestrutura" | "Sistemas" | "Especialização";
  level: "Iniciante" | "Intermédio" | "Avançado" | "Todos os Níveis";
  duration: string;
  format: "Presencial (Luanda)";
  practiceRatio: string; // e.g. "80% Prática"
  nextBatchDate: string; // Field editable e.g. "[INSERIR DATA]"
  schedule: string; // Field editable e.g. "Sábados / Pós-laboral"
  investment: string; // Field editable e.g. "[INSERIR PREÇO] Kz"
  vacancies: string; // Field editable e.g. "12 vagas restantes"
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Sábados das 09h às 13h / Pós-Laboral",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Sábados ou Pós-Laboral",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Sábados das 08h30 às 13h30",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Pós-Laboral / Fim de Semana",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Sábados / Pós-laboral",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Pós-Laboral",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Sábados / Pós-laboral",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Sábados / Pós-laboral",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    nextBatchDate: "[INSERIR DATA - Próxima Turma]",
    schedule: "Pós-Laboral / Sábados",
    investment: "[INSERIR VALOR] Kz",
    vacancies: "[X] Vagas Disponíveis",
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
    name: "[NOME DO FORMADOR 01]",
    role: "Especialista em Redes & CCNA",
    specialty: "Engenharia de Redes & Infraestrutura",
    experience: "[X] anos de experiência em redes corporativas e certificação ativa Cisco.",
    linkedinUrl: "https://linkedin.com",
    photoPlaceholder: "[FOTO DO FORMADOR DE REDES]"
  },
  {
    id: "inst-2",
    name: "[NOME DO FORMADOR 02]",
    role: "Administrador de Sistemas & Cloud",
    specialty: "Windows Server, Linux e Data Centers",
    experience: "[X] anos a gerir infraestruturas de TI e servidores em Angola.",
    linkedinUrl: "https://linkedin.com",
    photoPlaceholder: "[FOTO DO FORMADOR DE SISTEMAS]"
  },
  {
    id: "inst-3",
    name: "[NOME DO FORMADOR 03]",
    role: "Especialista em Cybersecurity & Suporte",
    specialty: "Segurança da Informação e Helpdesk",
    experience: "[X] anos de atuação em auditoria de segurança e consultoria tecnológica.",
    linkedinUrl: "https://linkedin.com",
    photoPlaceholder: "[FOTO DO FORMADOR DE SEGURANÇA]"
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
    studentName: "[TESTEMUNHO REAL DO ALUNO 01]",
    courseTaken: "Curso de Redes & CCNA",
    currentRoleOrOutcome: "Técnico de Redes",
    quote: "[Inserir depoimento real do aluno sobre como a prática no laboratório ajudou a ganhar confiança técnica.]",
    photoPlaceholder: "[FOTO REAL DO ALUNO 01]"
  },
  {
    id: "test-2",
    studentName: "[TESTEMUNHO REAL DO ALUNO 02]",
    courseTaken: "Helpdesk & Suporte Técnico",
    currentRoleOrOutcome: "Técnico de Suporte TI",
    quote: "[Inserir depoimento real do aluno sobre a transição do zero para o seu primeiro trabalho em tecnologia.]",
    photoPlaceholder: "[FOTO REAL DO ALUNO 02]"
  },
  {
    id: "test-3",
    studentName: "[TESTEMUNHO REAL DO ALUNO 03]",
    courseTaken: "Administração de Servidores",
    currentRoleOrOutcome: "Administrador de Sistemas",
    quote: "[Inserir depoimento real do aluno destacando o acompanhamento dos formadores durante as aulas presenciais.]",
    photoPlaceholder: "[FOTO REAL DO ALUNO 03]"
  }
];

export interface UpcomingBatch {
  id: string;
  courseTitle: string;
  startDate: string; // Editable e.g. "15 de Outubro, 2025"
  schedule: string;
  duration: string;
  modality: "Presencial em Luanda";
  investment: string; // Editable
  vacanciesLeft: string; // Editable
}

export const upcomingBatchesData: UpcomingBatch[] = [
  {
    id: "batch-1",
    courseTitle: "Helpdesk & Suporte Técnico de TI",
    startDate: "[INSERIR DATA REAL]",
    schedule: "Sábados (09h - 13h)",
    duration: "4 Semanas",
    modality: "Presencial em Luanda",
    investment: "[INSERIR PREÇO] Kz",
    vacanciesLeft: "[X] Vagas"
  },
  {
    id: "batch-2",
    courseTitle: "Redes de Computadores Essencial",
    startDate: "[INSERIR DATA REAL]",
    schedule: "Sábados ou Pós-Laboral",
    duration: "6 Semanas",
    modality: "Presencial em Luanda",
    investment: "[INSERIR PREÇO] Kz",
    vacanciesLeft: "[X] Vagas"
  },
  {
    id: "batch-3",
    courseTitle: "CCNA - Routing & Switching Avançado",
    startDate: "[INSERIR DATA REAL]",
    schedule: "Sábados (08h30 - 13h30)",
    duration: "10 Semanas",
    modality: "Presencial em Luanda",
    investment: "[INSERIR PREÇO] Kz",
    vacanciesLeft: "[X] Vagas"
  },
  {
    id: "batch-4",
    courseTitle: "Administração de Servidores",
    startDate: "[INSERIR DATA REAL]",
    schedule: "Pós-Laboral / Fim de Semana",
    duration: "8 Semanas",
    modality: "Presencial em Luanda",
    investment: "[INSERIR PREÇO] Kz",
    vacanciesLeft: "[X] Vagas"
  }
];
