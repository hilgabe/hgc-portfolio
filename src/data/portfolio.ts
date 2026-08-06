export type Service = {
  number: string
  title: string
  problem: string
  delivery: string
  tags: string[]
  featured?: boolean
}

export type Project = {
  slug: string
  label: string
  title: string
  context: string
  solution: string
  role: string
  technologies: string[]
  status: string
}

export const contact = {
  email: 'hilsongabrielcarvalho@gmail.com',
  phoneLabel: '+55 98 98919-8319',
  phone: '5598989198319',
  linkedin: 'https://www.linkedin.com/in/hgcba/',
  github: 'https://github.com/hilgabe',
  instagram: 'https://www.instagram.com/gabe.carv/',
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Produtos web',
    problem: 'Sua empresa precisa explicar melhor o que faz, gerar confiança e transformar visitas em conversas.',
    delivery: 'Sites institucionais, landing pages e experiências responsivas com conteúdo organizado e CTAs claros.',
    tags: ['React', 'TypeScript', 'SEO técnico'],
    featured: true,
  },
  {
    number: '02',
    title: 'Sistemas internos',
    problem: 'Informações espalhadas e controles manuais tornam a rotina lenta e difícil de acompanhar.',
    delivery: 'Portais, formulários, dashboards e ferramentas sob medida para centralizar a operação.',
    tags: ['Interfaces', 'Firebase', 'Dados'],
  },
  {
    number: '03',
    title: 'Integrações e automações',
    problem: 'A equipe repete tarefas ou transfere dados manualmente entre ferramentas que não conversam.',
    delivery: 'Integrações entre formulários, planilhas, APIs e sistemas. Bots entram apenas quando canal e infraestrutura estão definidos.',
    tags: ['APIs', 'Webhooks', 'Fluxos'],
  },
  {
    number: '04',
    title: 'Diagnóstico tecnológico',
    problem: 'Existe uma dor operacional, mas ainda não está claro qual tecnologia realmente vale implementar.',
    delivery: 'Mapeamento do processo atual, priorização do problema e proposta de uma solução viável para o contexto da empresa.',
    tags: ['Processos', 'Escopo', 'Validação'],
  },
]

export const projects: Project[] = [
  {
    slug: 'invest',
    label: 'Website comercial',
    title: 'Invest Corretora',
    context: 'Organizar um portfólio amplo de seguros e benefícios em uma jornada digital clara, responsiva e preparada para gerar atendimento.',
    solution: 'Arquitetura de conteúdo, componentes reutilizáveis, destaque para planos de saúde e caminhos objetivos para contato via WhatsApp.',
    role: 'Estratégia de conteúdo, desenvolvimento front-end, responsividade e estrutura técnica.',
    technologies: ['React', 'TypeScript', 'Vite'],
    status: 'Projeto real · evolução contínua',
  },
  {
    slug: 'opentask',
    label: 'Sistema interno',
    title: 'OpenTask',
    context: 'Reunir solicitações, tarefas, ativos e acompanhamento de SLA em uma experiência única para equipes e solicitantes.',
    solution: 'Protótipo funcional com workspace operacional, portal de solicitações, inventário, histórico e acompanhamento de tarefas.',
    role: 'Análise de fluxo, arquitetura do front-end, modelagem de dados e implementação do protótipo.',
    technologies: ['React', 'TypeScript', 'Vite'],
    status: 'Protótipo funcional · persistência pendente',
  },
  {
    slug: 'automation',
    label: 'Automação e qualidade',
    title: 'Fluxos de atendimento',
    context: 'Validar jornadas com estados, documentos, integrações, exceções e transferência humana antes de uma ativação real.',
    solution: 'Roteiros de homologação e ferramentas de teste para observar comportamento, persistência, fallback e integrações com menos risco.',
    role: 'Mapeamento de cenários, integração via APIs, validação e documentação técnica.',
    technologies: ['APIs', 'Webhooks', 'QA de fluxos'],
    status: 'Experiência profissional · casos preservados',
  },
]

export const experience = [
  {
    period: 'Atual',
    role: 'Analista de Suporte de TI e Soluções Tecnológicas',
    organization: 'Elétrica Visão',
    description: 'Atuação próxima da operação industrial, suporte técnico e comercialização de soluções de tecnologia para necessidades reais de empresas.',
  },
  {
    period: 'Experiência anterior',
    role: 'Jovem Aprendiz — TI e Help Desk',
    organization: 'SET — Sindicato das Empresas de Transporte de São Luís',
    description: 'Base profissional em atendimento, suporte ao usuário, organização e resolução de ocorrências de tecnologia.',
  },
  {
    period: 'Em formação',
    role: 'Bacharelado em Sistemas de Informação',
    organization: 'CEST — Centro Universitário Santa Terezinha',
    description: 'Formação conectada a desenvolvimento de software, sistemas, dados, infraestrutura e gestão de tecnologia.',
  },
]

export const skillGroups = [
  { title: 'Desenvolvimento', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { title: 'Dados e integrações', items: ['Firebase', 'APIs REST', 'Webhooks', 'Formulários', 'Dashboards'] },
  { title: 'Operação e qualidade', items: ['Suporte de TI', 'QA de fluxos', 'Documentação', 'Git', 'Vercel'] },
]

export const process = [
  { title: 'Entender', description: 'Converso com quem vive o problema e separo sintomas de causas.' },
  { title: 'Mapear', description: 'Organizo o processo atual, as informações e os pontos de decisão.' },
  { title: 'Propor', description: 'Transformo o diagnóstico em escopo, prioridades e uma solução viável.' },
  { title: 'Construir', description: 'Desenvolvo em ciclos curtos, com validação e visibilidade do progresso.' },
  { title: 'Validar', description: 'Testo comportamento, responsividade, acessibilidade e cenários de erro.' },
  { title: 'Evoluir', description: 'Acompanho o uso e organizo as próximas melhorias com base em evidências.' },
]
