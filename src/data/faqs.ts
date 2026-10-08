export interface FAQItem {
  question: string;
  answer: string;
  category: "Geral" | "Cursos" | "Pagamentos" | "Inscrições";
}

export const faqsData: FAQItem[] = [
  {
    question: "Preciso ter experiência prévia para começar?",
    answer: "Não. Temos formações desenhadas especificamente para iniciantes do zero, como o curso de Helpdesk & Suporte Técnico ou Redes de Computadores Essencial. O mais importante é a vontade de aprender e praticar.",
    category: "Geral"
  },
  {
    question: "Os cursos são 100% presenciais em Luanda?",
    answer: "Sim. A metodologia da NELBANZ é totalmente orientada à prática intensiva e ao contacto direto com equipamentos reais (routers, switches, servidores e bancadas de teste) nas nossas instalações na Zamba 2 - Bairro Azul, perto do cine Tivoli, casa nº 106.",
    category: "Cursos"
  },
  {
    question: "Onde ficam localizadas as instalações da NELBANZ?",
    answer: "Estamos localizados na Zamba 2 - Bairro Azul, perto do cine Tivoli, casa nº 106 em Luanda, Angola. Pode contactar a nossa equipa via WhatsApp (+244 950 502 332) para direções e apoio.",
    category: "Geral"
  },
  {
    question: "Qual é a duração média e início das próximas turmas?",
    answer: "A duração varia entre 4 a 10 semanas. Todas as próximas turmas têm início marcado para o dia 18 de Outubro de 2026 com o limite máximo de 6 vagas por turma para garantir ensino personalizado.",
    category: "Cursos"
  },
  {
    question: "Quanto custam as formações e como funcionam os pagamentos?",
    answer: "Os valores são transparentes: Helpdesk (50.000 Kz), Redes Essencial (80.000 Kz), CCNA (150.000 Kz), Servidores (120.000 Kz), Cybersecurity (90.000 Kz), Programação (100.000 Kz), SQL (70.000 Kz) e Inglês Técnico (40.000 Kz).",
    category: "Pagamentos"
  },
  {
    question: "Existe emissão de certificado no final do curso?",
    answer: "Sim. Todos os alunos que concluírem com aproveitamento as atividades práticas e o projeto final recebem o Certificado de Conclusão da NELBANZ – Academia Tecnológica.",
    category: "Cursos"
  },
  {
    question: "Posso pagar a formação em parcelas?",
    answer: "Oferecemos modalidades flexíveis de pagamento. Contacte o nosso consultor no WhatsApp (+244 950 502 332) para conhecer as opções disponíveis.",
    category: "Pagamentos"
  },
  {
    question: "Como funciona o processo de inscrição?",
    answer: "O processo é muito simples: escolhe o curso no site, clica no botão de reserva/WhatsApp ou preenche o formulário. A nossa equipa entrará em contacto direto para confirmar os detalhes e garantir a sua vaga na turma.",
    category: "Inscrições"
  },
  {
    question: "Que curso devo escolher se sou totalmente iniciante?",
    answer: "Recomendamos o Percurso 01 – COMEÇAR EM TI, que inclui Helpdesk (50.000 Kz) e Redes Essencial (80.000 Kz). Se tiver dúvidas, clica em 'Ajuda-me a Escolher' no site e um dos nossos orientadores irá guiar-te.",
    category: "Inscrições"
  },
  {
    question: "Posso falar com alguém antes de me matricular?",
    answer: "Com certeza! Pode falar diretamente com a nossa equipa via WhatsApp no +244 950 502 332 a qualquer momento para tirar todas as dúvidas.",
    category: "Geral"
  },
  {
    question: "Existem formações customizadas para empresas?",
    answer: "Sim. Desenvolvemos programas de capacitação tecnológica sob medida para equipas de TI de empresas corporativas em Angola. Fale connosco através do email contacto@nelbanz.ao ou WhatsApp.",
    category: "Cursos"
  },
  {
    question: "A NELBANZ ajuda na orientação e evolução profissional?",
    answer: "Sim. Durante as formações orientamos os alunos na construção do currículo técnico, portfólio de projetos desenvolvidos no laboratório e preparação para certificações do mercado.",
    category: "Geral"
  }
];
