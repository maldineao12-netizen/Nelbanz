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
    answer: "Sim. A metodologia da NELBANZ é totalmente orientada à prática intensiva e ao contacto direto com equipamentos reais (routers, switches, servidores e bancadas de teste) nas nossas instalações em Luanda.",
    category: "Cursos"
  },
  {
    question: "Onde ficam localizadas as instalações da NELBANZ?",
    answer: "Estamos localizados em Luanda, Angola. Pode consultar a localização exata e mapa interativo na secção de contactos do site ou falar com a nossa equipa via WhatsApp.",
    category: "Geral"
  },
  {
    question: "Qual é a duração média das formações?",
    answer: "A duração varia entre 4 a 10 semanas, dependendo do percurso e do nível do curso. As aulas são organizadas de forma intensiva em horários de fim de semana (sábados) ou pós-laboral para se ajustarem à sua rotina.",
    category: "Cursos"
  },
  {
    question: "Quanto custam as formações e como funcionam os pagamentos?",
    answer: "Os valores variam conforme o curso selecionado. [INSERIR DADO DE PREÇOS REAIS]. Para consultar o investimento exato de cada turma, basta clicar em 'Ver Detalhes' no curso pretendido ou contactar a nossa equipa no WhatsApp.",
    category: "Pagamentos"
  },
  {
    question: "Existe emissão de certificado no final do curso?",
    answer: "Sim. Todos os alunos que concluírem com aproveitamento as atividades práticas e o projeto final recebem o Certificado de Conclusão da NELBANZ – Academia Tecnológica.",
    category: "Cursos"
  },
  {
    question: "Posso pagar a formação em parcelas?",
    answer: "Oferecemos modalidades flexíveis de pagamento. [INSERIR POLÍTICA DE PARCELAMENTO REAL]. Contacte o nosso consultor no WhatsApp para conhecer o plano de propinas disponível.",
    category: "Pagamentos"
  },
  {
    question: "Como funciona o processo de inscrição?",
    answer: "O processo é muito simples: escolhe o curso no site, clica no botão de reserva/WhatsApp ou preenche o formulário. A nossa equipa entrará em contacto direto para confirmar os detalhes e garantir a sua vaga na turma.",
    category: "Inscrições"
  },
  {
    question: "Que curso devo escolher se sou totalmente iniciante?",
    answer: "Recomendamos o Percurso 01 – COMEÇAR EM TI, que inclui as bases de Helpdesk e Redes de Computadores. Se tiver dúvidas, clica em 'Ajuda-me a Escolher' no site e um dos nossos orientadores irá guiar-te.",
    category: "Inscrições"
  },
  {
    question: "Posso falar com alguém antes de me matricular?",
    answer: "Com certeza! Pode falar diretamente com um consultor técnico via WhatsApp a qualquer momento para tirar todas as dúvidas sobre conteúdos, horários e perspetivas de evolução.",
    category: "Geral"
  },
  {
    question: "Existem formações customizadas para empresas?",
    answer: "Sim. Desenvolvemos programas de capacitação tecnológica sob medida para equipas de TI de empresas corporativas em Angola. Fale connosco através do email corporativo ou WhatsApp.",
    category: "Cursos"
  },
  {
    question: "A NELBANZ ajuda na orientação e evolução profissional?",
    answer: "Sim. Durante as formações orientamos os alunos na construção do currículo técnico, portfólio de projetos desenvolvidos no laboratório e preparação para certificações do mercado.",
    category: "Geral"
  }
];
